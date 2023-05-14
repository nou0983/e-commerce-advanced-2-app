import { useState } from "react";
import { Navigate } from "react-router-dom";
import { SignUp, SignIn } from "../../components/index.component";
import Wrapper from "./authentication.styles";
import { useUserContext } from "../../contexts/UserContext";

const Authentication = () => {
  const [authMode, setAuthMode] = useState("sign in");
  const { currentUser } = useUserContext();

  if (currentUser) {
    return <Navigate to="/profile" />;
  }

  return (
    <Wrapper className="container">
      <div className="inner-container">
        <div className="btn-container">
          <button
            type="button"
            className={authMode === "sign in" ? "btn-active" : ""}
            onClick={() => setAuthMode("sign in")}
          >
            login
          </button>
          <button
            type="button"
            className={authMode === "sign up" ? "btn-active" : ""}
            onClick={() => setAuthMode("sign up")}
          >
            create account
          </button>
        </div>
        {authMode === "sign in" ? <SignIn /> : <SignUp />}
      </div>
    </Wrapper>
  );
};

export default Authentication;
