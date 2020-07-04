/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ text, animated, link, red, onClick }) {
  let button = (
    <a
      href="#"
      role="button"
      type="submit"
      onClick={onClick}
      className={`${styles.button} ${
        red ? styles.buttonRed : styles.buttonPrimary
      } ${animated ? styles.animated : ""}`}
    >
      {text}
    </a>
  );

  if (link) {
    button = (
      <Link
        to={link}
        className={`${styles.button} ${animated ? styles.animated : ""}`}
      >
        {text}
      </Link>
    );
  }
  return button;
}
