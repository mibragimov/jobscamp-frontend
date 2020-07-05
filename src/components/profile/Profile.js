import React, { useState } from "react";
import styles from "./Profile.module.css";
import { toast } from "react-toastify";

export default function Profile({ onUploadLogo, _id }) {
  const [file, setFile] = useState(undefined);

  const handleUploadFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append("logo", file);
      onUploadLogo(formData);
    } else {
      toast.warn("Please, upload a file");
    }
  };
  return (
    <div className={styles.profile}>
      <h3>Settings</h3>

      <div className={styles.row}>
        <div className={styles.nav}>
          <a href="#" className={styles.active}>
            <span className="material-icons">person</span>Profile
          </a>
          <a href="#">
            <span className="material-icons">translate</span>Language
          </a>
          <a href="#">
            <span className="material-icons">sync</span>Sync
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
                <img
                  className={styles.img}
                  src={`https://jobscamp-api.herokuapp.com/companies/${_id}/logo`}
                  alt=""
                />
              </figure>
              <label htmlFor="file" className={styles.upload}>
                Upload
              </label>
              <button className={styles.upload} onClick={handleUploadFile}>
                Change
              </button>
              <input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
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
