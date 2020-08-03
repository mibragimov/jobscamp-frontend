import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  jobs: [],
  creating: false,
  deleting: false,
  editing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobs: action.jobs,
      };
    case types.GET_JOBS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.CREATE_JOB_START:
      return {
        ...state,
        creating: true,
      };
    case types.CREATE_JOB_SUCCESS:
      return {
        ...state,
        creating: false,
        jobs: [action.job, ...state.jobs],
      };
    case types.CREATE_JOB_FAILURE:
      return {
        ...state,
        creating: false,
      };
    case types.DELETE_JOB_START:
      return {
        ...state,
        deleting: true,
      };
    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.data._id),
        loading: false,
        error: null,
      };

    case types.DELETE_JOB_FAILURE:
      return {
        ...state,
        deleting: false,
      };

    case types.DELETE_ACCOUNT_SUCCESS:
      return INITIAL_STATE;

    case types.EDIT_JOB_START:
      return {
        ...state,
        editing: true,
      };
    case types.EDIT_JOB_SUCCESS:
      const index = state.jobs.findIndex((job) => job._id === action.job._id);

      return {
        ...state,
        editing: false,
        jobs: [
          ...state.jobs.slice(0, index),
          { ...action.job },
          ...state.jobs.slice(index + 1),
        ],
      };
    case types.EDIT_JOB_FAILURE:
      return {
        ...state,
        editing: false,
      };

    default:
      return state;
  }
};
