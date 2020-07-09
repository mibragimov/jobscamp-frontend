import axios from "axios";
import * as types from "./types";
import { toast } from "react-toastify";

function uploadAvatarStart() {
  return {
    type: types.UPLOAD_AVATAR_START,
  };
}

function uploadAvatarSuccess(avatar) {
  return {
    type: types.UPLOAD_AVATAR_SUCCESS,
    avatar,
  };
}

function uploadAvatarFailure(err) {
  return {
    type: types.UPLOAD_AVATAR_FAILURE,
    error: err.message,
  };
}

function uploadAvatar(file) {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      dispatch(uploadAvatarStart());
      await axios.post(
        "https://jobscamp-api.herokuapp.com/companies/me/logo",
        file,
        config
      );
      dispatch(uploadAvatarSuccess());
      toast.success("File uploaded");
    } catch (err) {
      dispatch(uploadAvatarFailure(err));
      toast.error("Error connecting with server");
    }
  };
}

function getProfileStart() {
  return {
    type: types.GET_PROFILE_START,
  };
}
function getProfileSuccess(data) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    data,
  };
}
function getProfileFailure(error) {
  return {
    type: types.GET_PROFILE_FAILURE,
    error: error.message,
  };
}

function getProfile() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(getProfileStart());
      const {
        data,
      } = await axios.get(`https://jobscamp-api.herokuapp.com/companies/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getProfileSuccess(data));
    } catch (error) {
      dispatch(getProfileFailure(error));
    }
  };
}

function deleteAccountStart() {
  return {
    type: types.DELETE_ACCOUNT_START,
  };
}
function deleteAccountSuccess() {
  return {
    type: types.DELETE_ACCOUNT_SUCCESS,
  };
}
function deleteAccountFailure(err) {
  return {
    type: types.DELETE_ACCOUNT_FAILURE,
    error: err.message,
  };
}

function deleteAccount(history) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(deleteAccountStart());
      await axios.delete(`https://jobscamp-api.herokuapp.com/companies/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(deleteAccountSuccess());
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      history.push("/");
    } catch (error) {
      dispatch(deleteAccountFailure(error));
    }
  };
}

function editProfileStart() {
  return {
    type: types.EDIT_PROFILE_START,
  };
}
function editProfileSuccess(data) {
  return {
    type: types.EDIT_PROFILE_SUCCESS,
    data,
  };
}
function editProfileFailure(err) {
  return {
    type: types.EDIT_PROFILE_FAILURE,
    error: err.message,
  };
}

function editProfile(obj) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(editProfileStart());
      const {
        data,
      } = await axios.patch(
        `https://jobscamp-api.herokuapp.com/companies/me`,
        obj,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(editProfileSuccess(data));
    } catch (error) {
      dispatch(editProfileFailure(error));
    }
  };
}
export { uploadAvatar, getProfile, deleteAccount, editProfile };
