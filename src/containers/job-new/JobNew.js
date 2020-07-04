import React from "react";
import NavContainer from "../NavContainer/NavContainer";
import styles from "./JobNew.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export default function JobNew() {
  return (
    <div className={styles.container}>
      <NavContainer />
      <h3>Create a new job</h3>
      <form>
        <Input type="text" placeholder="role" required />
        <Input type="text" placeholder="role" required />
        <Input type="text" placeholder="role" required />
        <Input type="text" placeholder="role" required />
        <Input type="text" placeholder="role" required />
        <div className={styles.action}>
          <Button text="Cancel" red />
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
}
