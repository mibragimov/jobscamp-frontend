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

export { createJob };
