import { useState } from "react";
import { FormInput } from "../index.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  getDocument,
} from "../../utils/firebase.utils";
import Alert from "@mui/material/Alert";
import Wrapper from "./signIn.styles";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const AuthForm = () => {
  const INITIAL_INPUT_VALUES = {
    username: "",
    password: "",
  };
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
  const { username, password } = inputValues;

  const navigate = useNavigate();
  const { setCurrentUser, error, isLoading, setError, setLoading } =
    useUserContext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const setCurrentUserHandler = async (userAuth) => {
    await createUserDocumentFromAuth(userAuth);
    const userInfo = await getDocument("users", userAuth.user.uid);
    const currentUser = {
      userAuth,
      userInfo,
    };

    setCurrentUser(currentUser);
    setInputValues(INITIAL_INPUT_VALUES);
    navigate("/");
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userAuth = await signInAuthUserWithEmailAndPassword(
        username,
        password
      );
      await setCurrentUserHandler(userAuth);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        setError("No associated with this email");
      } else {
        setError("There was an error signing in!");
      }
    }

    setLoading(false);
  };

  const signInWithGoogleHandler = async () => {
    setLoading(true);

    const userAuth = await signInWithGooglePopup();
    await setCurrentUserHandler(userAuth);

    setLoading(false);
  };

  return (
    <Wrapper onSubmit={signInHandler}>
      <h3 className="heading-tertiary">Already have an account?</h3>
      <p>Sign in with your email and password</p>
      <FormInput
        type="text"
        label="email"
        name="username"
        id="username"
        placeholder="Enter email address"
        value={username}
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
      <div className="btn-inner-container">
        <button type="submit" className="btn" disabled={isLoading}>
          sign in
        </button>
        <button
          type="button"
          className="btn"
          disabled={isLoading}
          onClick={signInWithGoogleHandler}
        >
          sign in with google popup
        </button>
      </div>
      {error && (
        <Alert variant="outlined" severity="error" className="alert">
          {error}
        </Alert>
      )}
    </Wrapper>
  );
};

export default AuthForm;
