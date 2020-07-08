import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Profile.module.css";

import Spinner from "../spinner/Spinner";
import Modal from "../modal/Modal";
import Button from "../button/Button";

import logo from "../../assets/logo.jpeg";

export default function Profile({
  onUploadLogo,
  _id,
  profile,
  isLoading,
  isDeleting,
  isEditing,
  onDeleteAccount,
  onSelectFile,
  showModal,
  onShowModal,
  imgHash,
  uploading,
  onEditProfile,
}) {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setEditName(true);
      setName(value);
    } else {
      setEditName(false);
      setName(value);
    }
  };

  const handleSubmitNameChange = async () => {
    
    await onEditProfile({ name });
    setEditName(false);
  };

  const handleCancelNameChange = (e) => {
    setEditName(false);
    setName('');
  };

  const renderProfile = () => {
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
                <label>Organization</label>
                <input
                  type="text"
                  placeholder={profile.name}
                  value={name}
                  onChange={handleChange}
                />
                {editName ? (
                  <>
                    <label
                      className={`${styles.upload}`}
                      onClick={handleCancelNameChange}
                    >
                      Cancel
                    </label>
                    <label
                      className={`${styles.upload}`}
                      onClick={handleSubmitNameChange}
                    >
                      {isEditing ? 'Saving...' :  'Save'}
                    </label>
                  </>
                ) : null}
              </div>

              <div className={styles.avatar}>
                <h4>Company logo</h4>
                <figure>
                  <img
                    className={styles.img}
                    src={`https://jobscamp-api.herokuapp.com/companies/${_id}/logo?${imgHash}`}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = logo;
                    }}
                  />
                </figure>
                <label htmlFor="file" className={styles.upload}>
                  Upload
                </label>
                <button
                  className={styles.upload}
                  onClick={onUploadLogo}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Change"}
                </button>
                <input id="file" type="file" onChange={onSelectFile} />
              </div>
            </div>

            <div className={styles.email}>
              <h3>Email Address</h3>
              <p>
                Your email address is <b>{profile.email}</b>
              </p>
              <a href="#">Change</a>
            </div>
            <div className={styles.password}>
              <h3>Password</h3>
              <a href="#">Change</a>
            </div>
            <div className={styles.delete}>
              <a href="#" onClick={() => onShowModal(true)}>
                Delete my account
              </a>
              <p>You will receive an email to confirm your decision.</p>
            </div>
          </div>
        </div>
        <Modal
          title="Delete my account"
          show={showModal}
          handleClose={() => onShowModal(false)}
        >
          <div className={styles.modalContent}>
            <p>Are you sure you want to delete your account?</p>
            <div className={styles.modalAction}>
              <Button text="No" red onClick={() => onShowModal(false)} />
              <Button text="Yes" onClick={() => onDeleteAccount(history)} isLoading={isDeleting} />
            </div>
          </div>
        </Modal>
      </div>
    );
  };
  return isLoading ? <Spinner /> : renderProfile();
}
