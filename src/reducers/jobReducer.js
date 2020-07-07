import * as types from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  jobs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_JOB_START:
    case types.GET_JOBS_START:
    case types.DELETE_JOB_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.CREATE_JOB_FAILURE:
    case types.GET_JOBS_FAILURE:
    case types.DELETE_JOB_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobs: action.jobs,
      };
    case types.DELETE_ACCOUNT_SUCCESS:
      return INITIAL_STATE;
    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.data._id),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
