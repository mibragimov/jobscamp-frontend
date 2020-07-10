import React from "react";

import styles from "./Pagination.module.css";

export default function Pagination({
  resResPage,
  numOfRes,
  paginate,
  currPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numOfRes / resResPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination}>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a
                href="#"
                onClick={() => paginate(number)}
                className={`${styles.page} ${
                  number === currPage ? styles.active : ""
                }`}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
