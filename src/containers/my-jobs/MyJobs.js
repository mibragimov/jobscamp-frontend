import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// App imports

import Card from '../../components/card/Card';
import NavContainer from '../NavContainer/NavContainer';
import Search from '../../components/search/Search';
import { getMyJobs, deleteJob } from '../../actions/jobActions';
import Spinner from '../../components/spinner/Spinner';
import styles from './MyJobs.module.css';
import Pagination from '../../components/pagination/Pagination';

function MyJobs({ onGetJobs, isLoading, jobs, onDeleteJob, companyID }) {
  const [queryType, setQueryType] = useState('role');
  const [term, setTerm] = useState('');
  const [sortType, setSortType] = useState('createdAt:desc');

  // pagination
  const [resPerPage, setResPerPage] = useState(4);
  const [currPage, setCurrPage] = useState(1);

  const start = (currPage - 1) * resPerPage;
  const end = currPage * resPerPage;
  const paginate = (page) => setCurrPage(page);

  useEffect(() => {
    const timer = setTimeout(() => {
      onGetJobs(queryType, term, sortType);
    }, 400);

    return () => clearTimeout(timer);
  }, [onGetJobs, queryType, term, sortType]);

  const renderJobs = () => {
    if (jobs.length === 0 && !isLoading) {
      return (
        <h3 style={{ textAlign: 'center' }}>Can't find any matching results</h3>
      );
    }
    return (
      <Fragment>
        {jobs.slice(start, end).map((job) => {
          return (
            <Card
              job={job}
              key={job._id}
              companyID={companyID}
              onDeleteJob={onDeleteJob}
            />
          );
        })}

        <Pagination
          resResPage={resPerPage}
          numOfRes={jobs.length}
          paginate={paginate}
          currPage={currPage}
        />
      </Fragment>
    );
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
      dispatch(getMyJobs(queryType, term, sortType)),
    onDeleteJob: (id) => dispatch(deleteJob(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);
