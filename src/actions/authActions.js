import axios from "axios";
import * as types from "./types";

function signUpStart() {
  return {
    type: types.SIGN_UP_START,
  };
}

function signUpSuccess(data) {
  return {
    type: types.SIGN_UP_SUCCESS,
    _id: data.company._id,
    token: data.token,
  };
}

function signUpFailure(err) {
  return {
    type: types.SIGN_UP_FAILURE,
    error: err.message,
  };
}

function signUp(company, history) {
  return async function (dispatch) {
    try {
      dispatch(signUpStart());
      const { data } = await axios.post(
        "https://jobscamp-api.herokuapp.com/companies",
        company
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("_id", data.company._id);
      dispatch(signUpSuccess(data));
      history.push("/jobs");
    } catch (error) {
      dispatch(signUpFailure(error));
      console.log(error);
    }
  };
}

function loginStart() {
  return {
    type: types.LOGIN_START,
  };
}

function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    _id: data.company._id,
    token: data.token,
  };
}

function loginFailure(err) {
  return {
    type: types.LOGIN_FAILURE,
    error: err.message,
  };
}

function login(company, history) {
  return async function (dispatch) {
    try {
      dispatch(loginStart());
      const { data } = await axios.post(
        "https://jobscamp-api.herokuapp.com/companies/login",
        company
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("_id", data.company._id);
      dispatch(loginSuccess(data));
      history.push("/jobs");
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}

function logout() {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://jobscamp-api.herokuapp.com/companies/logout",
        undefined,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      dispatch({ type: types.LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };
}

/* since we set token in redux initial state below code in not neccessary
function checkAuthState(history) {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token) {
      const _id = localStorage.getItem("_id");
      dispatch(loginSuccess({ token, company: { _id } }));
      history.push("/jobs");
    } else {
      history.push("/");
    }
  };
}
*/

export { signUp, login, logout };
