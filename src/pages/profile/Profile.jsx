import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { useUserCOntext } from "../../contexts/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useUserCOntext();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div>
      <button type="button" onClick={signOutHandler}>
        log out
      </button>
    </div>
  );
};
export default Profile;
