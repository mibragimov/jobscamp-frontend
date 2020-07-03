import React from "react";

import styles from "./Button.module.css";

export default function Button({ text }) {
  return (
    <a href="#" role="button" type="submit" className={styles.button}>
      {text}
    </a>
  );
}
