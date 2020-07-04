import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Form.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

export default function Form({ loginForm, onSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignUp({ name, email, password }, history);
  };

  let form = (
    <form className={styles.form} onSubmit={handleSignUp}>
      <Input
        type="text"
        placeholder="name"
        required
        onChange={setName}
        value={name}
      />
      <Input
        type="email"
        placeholder="email"
        required
        onChange={setEmail}
        value={email}
      />
      <Input
        type="password"
        placeholder="password"
        required
        onChange={setPassword}
        value={password}
      />

      <Button text="Sign Up" onClick={handleSignUp} />
    </form>
  );

  if (loginForm) {
    form = (
      <form className={styles.form}>
        <Input type="email" placeholder="email" required />
        <Input type="password" placeholder="password" required />

        <Button text="Log in" />
      </form>
    );
  }
  return form;
}
