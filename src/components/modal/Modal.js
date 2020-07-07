import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

export default function Modal({ children, handleClose, show, title }) {
  return ReactDOM.createPortal(
    <div
      className={`${styles.backdrop} ${show ? styles.show : styles.hide}`}
      onClick={handleClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <section>
          <h3>{title}</h3>
          <div>{children}</div>
          <a href="#" onClick={handleClose} className={styles.button}>
            <span className="material-icons">close</span>
          </a>
        </section>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
