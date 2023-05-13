import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../index.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { useUserCOntext } from "../../contexts/UserContext";

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
  const { setCurrentUser } = useUserCOntext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("your passwords don't match");
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
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create account, email already in use!");
      }
    }
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
        <button type="submit" className="btn">
          sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
