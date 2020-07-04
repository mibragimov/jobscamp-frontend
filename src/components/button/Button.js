/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  text,
  animated,
  link,
  red,
  onClick,
  isLoading,
}) {
  let button = (
    <>
      <button
        type="submit"
        onClick={onClick}
        disabled={isLoading}
        className={`${styles.button} ${
          red ? styles.buttonRed : styles.buttonPrimary
        } ${animated ? styles.animated : ""}`}
      >
        {text}

        {isLoading ? (
          <div className={`ld-ext-right ${styles.loader}`}>
            <div className="ld ld-ring ld-spin"></div>
          </div>
        ) : null}
      </button>
    </>
  );

  if (link) {
    button = (
      <Link
        to={link}
        className={`${styles.button} ${
          red ? styles.buttonRed : styles.buttonPrimary
        } ${animated ? styles.animated : ""}`}
      >
        {text}
      </Link>
    );
  }
  return button;
}
