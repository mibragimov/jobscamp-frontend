import axios from "axios";
import * as types from "./types";
import { toast } from "react-toastify";

const proxy = "https://cors-anywhere.herokuapp.com/";

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
    const _id = localStorage.getItem("_id");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    let avatar;

    try {
      dispatch(uploadAvatarStart());
      const res = await axios.post(
        proxy + "https://jobscamp-api.herokuapp.com/companies/me/logo",
        file,
        config
      );

      console.log(res);

      dispatch(uploadAvatarSuccess());
      toast.success("File uploaded");
    } catch (err) {
      dispatch(uploadAvatarFailure(err));
    }
  };
}

export { uploadAvatar };
