import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Link to="/jobs">
            Jobscamp<sup>tm</sup>
          </Link>
        </li>
        <li className={styles.company}>
          <Link to="/profile">company</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
}
