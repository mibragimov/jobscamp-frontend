import React from "react";

import vid from "../../assets/bg.mp4";
import styles from "./Landing.module.css";

import Button from "../button/Button";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video className={styles.content} autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      <div className={styles.text}>
        <h1 className={styles.heading}>
          <span className={styles.headingMain}>Discover talents</span>
          <span className={styles.headingSub}>Posting jobs made easy</span>
        </h1>
        <Button text="Get Started" link="/login" animated />
      </div>
    </div>
  );
}
