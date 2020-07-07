import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

export default function Navigation({ isAuth }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Link to="/jobs">
            Jobscamp<sup>tm</sup>
          </Link>
        </li>
        <li className={styles.company}>
          {isAuth ? <Link to="/posts">My jobs</Link> : null}
        </li>
        <li className={styles.company}>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          {isAuth ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
