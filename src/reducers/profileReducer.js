import * as types from "../actions/types";

const INITIAL_STATE = {
  profileInfo: {},
  loading: false,
  error: null,
  uploading: false,
  deleting: false,
  editing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PROFILE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileInfo: action.data,
        loading: false,
        error: null,
      };
    case types.GET_PROFILE_FAILURE: 
    return {
      ...state,
      loading: false,
      error: action.error
    }
      case types.DELETE_ACCOUNT_START: 
      return {
        ...state,
        deleting: true
      }
      case types.DELETE_ACCOUNT_SUCCESS:
      return INITIAL_STATE;
    case types.DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        deleting: false
      };
    
    case types.UPLOAD_AVATAR_START:
      return {
        ...state,
        uploading: true,
      };
    case types.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        uploading: false,
      };
    case types.UPLOAD_AVATAR_FAILURE:
      return {
        ...state,
        uploading: false,
      };
    case types.EDIT_PROFILE_START:
      return {
        ...state,
        editing: true
      }
    case types.EDIT_PROFILE_SUCCESS: 
      return {
        ...state,
        profileInfo: action.data,
        editing: false
      };
    case types.EDIT_PROFILE_FAILURE: 
    return {
      ...state,
      editing: false,
      error: action.error
    }
    
    default:
      return state;
  }
};
