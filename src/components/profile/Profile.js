import React from "react";
import styles from "./Profile.module.css";

import Input from "../input/Input";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <h3>Settings</h3>

      <div className={styles.row}>
        <div className={styles.nav}>
          <a href="#" className={styles.active}>
            <span class="material-icons">person</span>Profile
          </a>
          <a href="#">
            <span class="material-icons">translate</span>Language
          </a>
          <a href="#">
            <span class="material-icons">sync</span>Sync
          </a>
        </div>

        <div className={styles.edit}>
          <div className={styles.box}>
            <div className={styles.name}>
              <label>Name</label>
              <input type="text" placeholder="name" />
              <label>Name</label>
              <input type="text" placeholder="name" />
            </div>

            <div className={styles.avatar}>
              <h4>Company logo</h4>
              <figure>
                <img src="" alt="" />
              </figure>
              <label htmlFor="file" className={styles.upload}>
                Upload
              </label>
              <input id="file" type="file" />
            </div>
          </div>

          <div className={styles.email}>
            <h3>Email Address</h3>
            <p>
              Your email address is <b>example@example.com</b>
            </p>
            <a href="#">Change</a>
          </div>
          <div className={styles.password}>
            <h3>Password</h3>
            <a href="#">Change</a>
          </div>
          <div className={styles.delete}>
            <a href="#">Delete my account</a>
            <p>You will receive an email to confirm your decision.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
