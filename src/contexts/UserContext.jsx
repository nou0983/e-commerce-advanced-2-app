import { createContext, useContext, useReducer } from "react";
import {
  INITIAL_USER_STATE,
  USER_ACTION_TYPE,
  userReducer,
} from "../reducers/userReducer";
import { actionCreator } from "../utils/actionCreator.utils";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);

  const setCurrentUser = (user) => {
    dispatch(actionCreator(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };

  const value = {
    ...state,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserCOntext = () => useContext(UserContext);

export { UserContextProvider, useUserCOntext };
