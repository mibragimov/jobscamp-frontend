import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// App imports
import NavContainer from "../NavContainer/NavContainer";
import styles from "../job-new/JobNew.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { editJob } from "../../actions/jobActions";

function JobEdit({ onEditJob, selectedJob, isEditing }) {
  const [role, setRole] = useState(selectedJob.role);
  const [type, setType] = useState(selectedJob.type);
  const [skills, setSkills] = useState(...selectedJob.skills);
  const [location, setLocation] = useState(selectedJob.location);

  const history = useHistory();
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditJob(params.id, { role, type, skills, location }, history);
  };
  return (
    <div className={styles.container}>
      <NavContainer />
      <h3>Edit the following job</h3>
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
          <Button text="Cancel" onClick={() => history.goBack()} red />
          <Button text="Submit" isLoading={isEditing} />
        </div>
      </form>
    </div>
  );
}

JobEdit.defaultProps = {
  selectedJob: {
    role: "",
    type: "",
    skills: "",
    location: "",
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.job.loading,
    error: state.job.error,
    selectedJob: state.job.jobs.find(
      (job) => job._id === ownProps.match.params.id
    ),
    isEditing: state.job.editing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditJob: (id, { role, type, skills, location }, history) =>
      dispatch(editJob(id, { role, type, skills, location }, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobEdit);
