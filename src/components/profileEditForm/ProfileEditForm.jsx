import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { FormInput } from "../index.component";
import { updateDocument, getDocument } from "../../utils/firebase.utils";

const ProfileEditForm = ({ cancelHandler }) => {
  const {
    currentUser: { userAuth, userInfo },
    setCurrentUser,
    isLoading,
    setLoading,
  } = useUserContext();

  const [inputValues, setInputValues] = useState(userInfo);
  const { displayName, address, mobile, email } = inputValues;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateDocument("users", userAuth.user.uid, inputValues);
    const userInfo = await getDocument("users", userAuth.user.uid);
    setCurrentUser({ userAuth, userInfo });
    setLoading(false);
    cancelHandler(false);
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
        disabled={true}
        value={email}
        onChangeHandler={onChangeHandler}
      />
      <FormInput
        type="address"
        label="address"
        name="address"
        id="address"
        placeholder="Enter your address"
        value={address}
        onChangeHandler={onChangeHandler}
      />
      <FormInput
        type="mobile"
        label="mobile"
        name="mobile"
        id="mobile"
        placeholder="Enter your mobile"
        value={mobile}
        onChangeHandler={onChangeHandler}
      />

      <div className="btn-container">
        <button type="submit" className="btn" disabled={isLoading}>
          update
        </button>
        <button
          type="button"
          className="btn"
          disabled={isLoading}
          onClick={() => cancelHandler(false)}
        >
          cancel
        </button>
      </div>
    </form>
  );
};
export default ProfileEditForm;
