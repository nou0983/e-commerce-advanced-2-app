import { createContext, useContext, useEffect, useReducer } from "react";
import {
  INITIAL_USER_STATE,
  USER_ACTION_TYPE,
  userReducer,
} from "../reducers/userReducer";
import { actionCreator } from "../utils/actionCreator.utils";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const { currentUser, error } = state;

  useEffect(() => {
    localStorage.setItem("lamaUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  }, [error]);

  const setCurrentUser = (user) => {
    dispatch(actionCreator(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };

  const setError = (error) => {
    dispatch(actionCreator(USER_ACTION_TYPE.SET_ERROR, error));
  };

  const setLoading = (bool) => {
    dispatch(actionCreator(USER_ACTION_TYPE.TOGGLE_LOADING, bool));
  };

  const value = {
    ...state,
    setCurrentUser,
    setError,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
