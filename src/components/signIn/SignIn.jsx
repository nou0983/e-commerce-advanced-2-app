import { useState } from "react";
import { FormInput } from "../index.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Wrapper from "./signIn.styles";
import { useNavigate } from "react-router-dom";
import { useUserCOntext } from "../../contexts/UserContext";

const AuthForm = () => {
  const INITIAL_INPUT_VALUES = {
    username: "",
    password: "",
  };
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
  const { username, password } = inputValues;

  const navigate = useNavigate();
  const { setCurrentUser } = useUserCOntext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    try {
      const userAuth = await signInAuthUserWithEmailAndPassword(
        username,
        password
      );
      setCurrentUser(userAuth);
      setInputValues(INITIAL_INPUT_VALUES);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        alert("no associated with this email");
      }
    }
  };

  const signInWithGoogleHandler = async () => {
    const userAuth = await signInWithGooglePopup();
    await createUserDocumentFromAuth(userAuth);
    setCurrentUser(userAuth);
    setInputValues(INITIAL_INPUT_VALUES);
    navigate("/");
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
        <button type="submit" className="btn">
          sign in
        </button>
        <button type="button" className="btn" onClick={signInWithGoogleHandler}>
          sign in with google popup
        </button>
      </div>
    </Wrapper>
  );
};

export default AuthForm;
