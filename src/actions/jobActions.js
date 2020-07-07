import axios from "axios";
import * as types from "./types";
import { toast } from "react-toastify";

const proxy = "https://cors-anywhere.herokuapp.com/";

function createJobStart() {
  return {
    type: types.CREATE_JOB_START,
  };
}
function createJobSuccess(job) {
  return {
    type: types.CREATE_JOB_SUCCESS,
    job,
  };
}
function createJobFailure(err) {
  return {
    type: types.CREATE_JOB_FAILURE,
    error: err.message,
  };
}

function createJob(job, history) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(createJobStart());
      const {
        data,
      } = await axios.post(
        `${proxy}https://jobscamp-api.herokuapp.com/jobs`,
        job,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(createJobSuccess(data));
      toast.success("Job created successfully!");
      history.push("/jobs");
    } catch (error) {
      dispatch(createJobFailure(error));
      toast.error("Error connecting with server");
    }
  };
}

function getJobsStart() {
  return {
    type: types.GET_JOBS_START,
  };
}
function getJobsSuccess(jobs) {
  return {
    type: types.GET_JOBS_SUCCESS,
    jobs,
  };
}
function getJobsFailure(error) {
  return {
    type: types.GET_JOBS_FAILURE,
    error,
  };
}

function getJobs(query, term, sortBy) {
  return async (dispatch) => {
    try {
      dispatch(getJobsStart());
      const { data } = await axios.get(
        `${proxy}https://jobscamp-api.herokuapp.com/jobs?${query}=${term}&sortBy=${sortBy}`
      );
      dispatch(getJobsSuccess(data));
    } catch (error) {
      dispatch(getJobsFailure(error));
    }
  };
}
function getMyJobs(query, term, sortBy) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(getJobsStart());
      const { data } = await axios.get(
        `${proxy}https://jobscamp-api.herokuapp.com/jobs/me?${query}=${term}&sortBy=${sortBy}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getJobsSuccess(data));
    } catch (error) {
      dispatch(getJobsFailure(error));
    }
  };
}

function editJobStart() {
  return {
    type: types.EDIT_JOB_START,
  };
}
function editJobSuccess() {
  return {
    type: types.EDIT_JOB_SUCCESS,
  };
}
function editJobFailure(err) {
  return {
    type: types.EDIT_JOB_FAILURE,
    error: err.message,
  };
}

function editJob(id, update, history) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(editJobStart());
      await axios.patch(
        `${proxy}https://jobscamp-api.herokuapp.com/jobs/${id}`,
        update,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(editJobSuccess());
      history.push("/my-jobs");
    } catch (error) {
      dispatch(editJobFailure(error));
    }
  };
}

function deleteJobStart() {
  return {
    type: types.DELETE_JOB_START,
  };
}
function deleteJobSuccess(data) {
  return {
    type: types.DELETE_JOB_SUCCESS,
    data,
  };
}
function deleteJobFailure(err) {
  return {
    type: types.DELETE_JOB_FAILURE,
    error: err.message,
  };
}

function deleteJob(id) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(deleteJobStart());
      const { data } = await axios.delete(
        `${proxy}https://jobscamp-api.herokuapp.com/jobs/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(deleteJobSuccess(data));
    } catch (error) {
      dispatch(deleteJobFailure(error));
    }
  };
}

export { createJob, getJobs, getMyJobs, editJob, deleteJob };
