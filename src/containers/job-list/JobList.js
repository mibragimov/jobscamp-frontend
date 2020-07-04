import React from "react";
import { Link } from "react-router-dom";

import styles from "./JobList.module.css";
import Card from "../../components/card/Card";
import NavContainer from "../NavContainer/NavContainer";
import Search from "../../components/search/Search";

export default function JobList() {
  return (
    <div className={styles.container}>
      <NavContainer />
      <Search />
      <Card />
      <Card />
      <Card />
      <Card />

      <Link to="/jobs/new" className={styles.add}>
        <span className="material-icons">add</span>
      </Link>
    </div>
  );
}
