import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { useUserContext } from "../../contexts/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const {
    setCurrentUser,
    currentUser: { userInfo },
  } = useUserContext();
  console.log(userInfo, Object.keys(userInfo));
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="heading-secondary">account</h2>
      <h3 className="heading-tertiary">person details</h3>
      {Object.keys(userInfo).map((label) => {
        if (label !== "createdAt") {
          return (
            <p key={label}>
              {label} {userInfo[label]}
            </p>
          );
        }
      })}
      <button type="button" className="btn" onClick={signOutHandler}>
        log out
      </button>
    </div>
  );
};

export default Profile;
