import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// App imports

import Card from "../../components/card/Card";
import NavContainer from "../NavContainer/NavContainer";
import Search from "../../components/search/Search";
import { getMyJobs, deleteJob } from "../../actions/jobActions";
import Spinner from "../../components/spinner/Spinner";
import styles from "./MyJobs.module.css";

function MyJobs({ onGetJobs, isLoading, jobs, onDeleteJob }) {
  const [queryType, setQueryType] = useState("role");
  const [term, setTerm] = useState("");
  const [sortType, setSortType] = useState("createdAt:desc");

  useEffect(() => {
    const timer = setTimeout(() => {
      onGetJobs(queryType, term, sortType);
    }, 400);

    return () => clearTimeout(timer);
  }, [onGetJobs, queryType, term, sortType]);

  const renderJobs = () => {
    return jobs.map((job) => {
      return <Card job={job} key={job._id} action onDeleteJob={onDeleteJob} />;
    });
  };

  return (
    <div className={styles.container}>
      <NavContainer />
      <Search
        onSelectQueryType={setQueryType}
        queryType={queryType}
        onChangeTerm={setTerm}
        value={term}
        onSelectSortType={setSortType}
        sortType={sortType}
      />
      {isLoading ? <Spinner /> : renderJobs()}

      <Link to="/jobs/new" className={styles.add}>
        <span className="material-icons">add</span>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    jobs: state.job.jobs,
    isLoading: state.job.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetJobs: (queryType, term, sortType) =>
      dispatch(getMyJobs(queryType, term, sortType)),
    onDeleteJob: (id) => dispatch(deleteJob(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);
