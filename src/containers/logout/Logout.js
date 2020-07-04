import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

function Logout({ onLogout }) {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
