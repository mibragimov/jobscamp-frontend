import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.signUp}>
        <h3 className={styles.heading}>Sign Up</h3>
        <Form />

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
