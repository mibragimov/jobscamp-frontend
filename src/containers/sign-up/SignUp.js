import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";
import Form from "../../components/form/Form";

import styles from "./SignUp.module.css";

function SignUp({ onSignUp, isLoading }) {
  return (
    <div className={styles.container}>
      <div className={styles.signUp}>
        <h3 className={styles.heading}>Sign Up</h3>
        <Form onSignUp={onSignUp} isLoading={isLoading} />

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
const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: ({ name, email, password }, history) =>
      dispatch(signUp({ name, email, password }, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
