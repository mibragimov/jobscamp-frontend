import React from "react";

import styles from "./Form.module.css";
import Button from "../button/Button";

export default function Form({ signUpForm, loginForm }) {
  let form = (
    <form className={styles.form}>
      <div className={styles.group}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          className={styles.input}
          required
        />
        <label className={styles.label} htmlFor="name">
          Name
        </label>
      </div>
      <div className={styles.group}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className={styles.input}
          required
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>
      <div className={styles.group}>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className={styles.input}
          required
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
      </div>

      <Button text="Sign Up" />
    </form>
  );

  if (loginForm) {
    form = (
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className={styles.input}
            required
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
        </div>
        <div className={styles.group}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={styles.input}
            required
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
        </div>

        <Button text="Log in" />
      </form>
    );
  }
  return form;
}
