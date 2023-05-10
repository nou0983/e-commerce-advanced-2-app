import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const AuthForm = () => {
  const signInHandler = async () => {
    const userAuth = await signInWithGooglePopup();
    console.log(userAuth)
    createUserDocumentFromAuth(userAuth);
  };

  return (
    <div>
      <button type="button" onClick={signInHandler}>
        sign in with google popup
      </button>
    </div>
  );
};

export default AuthForm;
