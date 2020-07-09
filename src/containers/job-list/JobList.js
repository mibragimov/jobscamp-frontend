import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// App imports
import styles from "./JobList.module.css";
import Card from "../../components/card/Card";
import NavContainer from "../NavContainer/NavContainer";
import Search from "../../components/search/Search";
import { getJobs } from "../../actions/jobActions";
import Spinner from "../../components/spinner/Spinner";

function JobList({ onGetJobs, isLoading, jobs, companyID }) {
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
    if (jobs.length === 0 && !isLoading) {
      return (
        <h3 style={{ textAlign: "center" }}>Can't find any matching results</h3>
      );
    }
    return jobs.map((job) => {
      return <Card job={job} key={job._id} companyID={companyID} />;
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
    companyID: state.auth._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetJobs: (queryType, term, sortType) =>
      dispatch(getJobs(queryType, term, sortType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
