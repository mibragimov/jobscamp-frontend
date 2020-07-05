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
    default:
      return state;
  }
};
