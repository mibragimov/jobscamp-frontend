import * as types from "../actions/types";

const INITIAL_STATE = {
  _id: null,
  token: null,
  loading: false,
  error: null,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_UP_START:
    case types.LOGIN_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.SIGN_UP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        _id: action._id,
        token: action.token,
        error: null,
        loading: false,
      };
    case types.SIGN_UP_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
