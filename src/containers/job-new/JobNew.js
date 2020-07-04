import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// App imports
import NavContainer from "../NavContainer/NavContainer";
import styles from "./JobNew.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { createJob } from "../../actions/jobActions";

function JobNew({ onCreateJob, isLoading }) {
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateJob({ role, type, skills, location }, history);
  };
  return (
    <div className={styles.container}>
      <NavContainer />
      <h3>Create a new job</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="role"
          required
          onChange={setRole}
          value={role}
        />
        <Input
          type="text"
          placeholder="type"
          required
          onChange={setType}
          value={type}
        />
        <Input
          type="text"
          placeholder="skills"
          required
          onChange={setSkills}
          value={skills}
        />
        <Input
          type="text"
          placeholder="location"
          required
          onChange={setLocation}
          value={location}
        />
        <div className={styles.action}>
          <Button text="Cancel" link="/jobs" red />
          <Button text="Submit" isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.job.loading,
  error: state.job.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateJob: ({ role, type, skills, location }, history) =>
      dispatch(createJob({ role, type, skills, location }, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobNew);
