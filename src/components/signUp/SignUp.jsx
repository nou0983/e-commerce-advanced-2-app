import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../index.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { useUserCOntext } from "../../contexts/UserContext";
import Alert from "@mui/material/Alert";

const SignUp = () => {
  const INITIAL_INPUT_VALUES = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
  const { displayName, email, password, confirmPassword } = inputValues;

  const navigate = useNavigate();
  const { setCurrentUser, error, isLoading, setError, setLoading } =
    useUserCOntext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Your passwords don't match");
      setLoading(false);
      return;
    }

    try {
      const userAuth = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(userAuth, { displayName });
      setCurrentUser(userAuth);
      setInputValues(INITIAL_INPUT_VALUES);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        setError("Cannot create account, email already in use!");
      } else if (error.code === "auth/weak-password") {
        setError("Your password is too short/weak");
      } else {
        setError("There was an error creating your account!");
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={signUpHandler}>
      <h3 className="heading-tertiary">Don't have an account?</h3>
      <p>Sign up with your email and password</p>
      <FormInput
        type="text"
        label="name"
        name="displayName"
        id="display-name"
        placeholder="Enter your name"
        value={displayName}
        onChangeHandler={onChangeHandler}
      />
      <FormInput
        type="email"
        label="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChangeHandler={onChangeHandler}
      />
      <FormInput
        type="password"
        label="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChangeHandler={onChangeHandler}
      />
      <FormInput
        type="password"
        label="confirm password"
        name="confirmPassword"
        id="confirm-password"
        placeholder="Enter your password"
        value={confirmPassword}
        onChangeHandler={onChangeHandler}
      />
      <div className="btn-inner-container">
        <button type="submit" className="btn" disabled={isLoading}>
          sign up
        </button>
      </div>
      {error && (
        <Alert variant="outlined" severity="error" className="alert">
          {error}
        </Alert>
      )}
    </form>
  );
};

export default SignUp;
