import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";
import Form from "../../components/form/Form";

import styles from "./SignUp.module.css";

function SignUp({ onSignUp }) {
  return (
    <div className={styles.container}>
      <div className={styles.signUp}>
        <h3 className={styles.heading}>Sign Up</h3>
        <Form onSignUp={onSignUp} />

        <p className={styles.paragraph}>
          Already have an account?{" "}
          <Link to="/login" className={styles.login}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: ({ name, email, password }, history) =>
      dispatch(signUp({ name, email, password }, history)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
