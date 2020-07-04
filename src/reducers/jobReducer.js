import * as types from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  job: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_JOB_START:
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
        job: state.job.concat(action.job),
      };
    case types.CREATE_JOB_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
