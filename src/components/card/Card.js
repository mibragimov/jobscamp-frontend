import React from "react";

import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <figure className={styles.shape}>
        <img className={styles.img} src="" alt="" />
      </figure>

      <div className={styles.text}>
        <h4 className={styles.company}>Photosnap</h4>
        <div className={styles.box}>
          <h3 className={styles.role}>Frontend Developer</h3>
          <ul className={styles.skills}>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>JAVA</li>
          </ul>
        </div>
        <ul className={styles.details}>
          <li>1d ago</li>
          <li>Full time</li>
          <li>USA</li>
        </ul>
      </div>
    </div>
  );
}
