import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import Form from "../../components/form/Form";

import styles from "./Login.module.css";

function Login({ onLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h3 className={styles.heading}>Log in</h3>
        <Form loginForm onLogin={onLogin} />

        <p className={styles.paragraph}>
          Don't have an account?
          <Link to="/sign-up" className={styles.signUp}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: ({ email, password }, history) =>
      dispatch(login({ email, password }, history)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
