import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { useUserContext } from "../../contexts/UserContext";
import Wrapper from "./profile.styles";
import { ProfileEditForm } from "../../components/index.component";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const {
    setCurrentUser,
    currentUser: { userInfo },
  } = useUserContext();
  const { displayName, address, mobile, email } = userInfo;

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  const editHandler = () => {
    setEdit(!edit);

    if (edit) {
    }
  };

  return (
    <Wrapper className="container">
      <div className="profile-container">
        <h2 className="heading-secondary">account</h2>
        <h3 className="heading-tertiary">person details</h3>

        {edit ? (
          <ProfileEditForm cancelHandler={setEdit} />
        ) : (
          <>
            <p>name: {displayName}</p>
            <p>email: {email}</p>
            <p>mobile: {mobile}</p>
            <p>address: {address}</p>

            <div className="btn-container">
              <button type="button" className="btn" onClick={editHandler}>
                edit
              </button>
              <button type="button" className="btn" onClick={signOutHandler}>
                log out
              </button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Profile;
