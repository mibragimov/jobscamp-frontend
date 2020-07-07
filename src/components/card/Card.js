import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import styles from "./Card.module.css";
import logo from "../../assets/logo.jpeg";

export default function Card({ job, action, onDeleteJob }) {
  let skillsArray;

  const history = useHistory();

  if (job) {
    skillsArray = job.skills
      .join()
      .split(",")
      .map((skill) => skill.trim());
  }

  return (
    <div className={styles.card}>
      <figure className={styles.shape}>
        <img
          className={styles.img}
          src={`https://jobscamp-api.herokuapp.com/companies/${job.owner}/logo`}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = logo;
          }}
        />
      </figure>

      <div className={styles.text}>
        <h4 className={styles.company}>{job.company}</h4>
        <div className={styles.box}>
          <h3 className={styles.role}>{job.role}</h3>
          <ul className={styles.skills}>
            {skillsArray.map((skill, idx) => (
              <li key={idx} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.details}>
          <li>{moment(job.createdAt).fromNow()}</li>
          <li>{job.type}</li>
          <li>{job.location}</li>
        </ul>
      </div>

      {action && (
        <div className={styles.action}>
          <span
            className="material-icons"
            onClick={() => history.push(`/my-jobs/${job._id}`)}
          >
            edit
          </span>
          <span className="material-icons" onClick={() => onDeleteJob(job._id)}>
            delete
          </span>
        </div>
      )}
    </div>
  );
}
