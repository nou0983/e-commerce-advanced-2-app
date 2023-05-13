const INITIAL_USER_STATE = {
  isLoading: false,
  error: null,
  currentUser: null,
};

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  TOGGLE_LOADING: "TOGGLE_LOADING",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPE.TOGGLE_LOADING:
      return { ...state, isLoading: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_USER_STATE, USER_ACTION_TYPE, userReducer };
