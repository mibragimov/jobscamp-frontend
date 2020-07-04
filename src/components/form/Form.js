import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Form.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

export default function Form({ loginForm, onSignUp, onLogin, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignUp({ name, email, password }, history);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password }, history);
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

      <Button text="Sign Up" isLoading={isLoading} />
    </form>
  );

  if (loginForm) {
    form = (
      <form className={styles.form} onSubmit={handleLogin}>
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

        <Button text="Log in" isLoading={isLoading} />
      </form>
    );
  }
  return form;
}
