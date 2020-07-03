import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h3 className={styles.heading}>Log in</h3>
        <Form loginForm />

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
