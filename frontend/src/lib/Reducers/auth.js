import { SET_AUTH } from "../Actions/auth";

const initialState = {
  is_authenticated: false,
  is_superuser: false,
  is_checked: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        is_authenticated: action.payload,
        is_superuser: action.payload,
        is_checked: true,
      };
    default:
      return state;
  }
};

export default authReducer;
