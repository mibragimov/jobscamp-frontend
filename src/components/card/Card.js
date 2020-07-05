import React from "react";
import moment from "moment";

import styles from "./Card.module.css";

export default function Card({ job }) {
  let skillsArray;

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
    </div>
  );
}
