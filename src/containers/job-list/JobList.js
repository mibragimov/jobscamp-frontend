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

function JobList({ onGetJobs, isLoading, jobs }) {
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
      return <Card job={job} key={job._id} />;
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
      dispatch(getJobs(queryType, term, sortType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
