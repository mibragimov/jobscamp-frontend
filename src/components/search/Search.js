import React from "react";

import styles from "./Search.module.css";

export default function Search({
  value,
  onChangeTerm,
  onSelectQueryType,
  onSelectSortType,
  queryType,
  sortType,
}) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChangeTerm(e.target.value)}
      />
      <div className={styles.filter}>
        <div className={styles.box}>
          <select
            onChange={(e) => onSelectQueryType(e.target.value)}
            value={queryType}
          >
            <option value="role">By position</option>
            <option value="skills">By skills</option>
            <option value="company">By company</option>
          </select>
        </div>
        <div className={styles.box}>
          <select
            onChange={(e) => onSelectSortType(e.target.value)}
            value={sortType}
          >
            <option value="createdAt:desc">Newest</option>
            <option value="createdAt:asc">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
