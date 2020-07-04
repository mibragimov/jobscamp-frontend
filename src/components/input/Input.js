import React from "react";

import styles from "./Input.module.css";

export default function Input({
  type,
  placeholder,
  required,
  onChange,
  value,
}) {
  return (
    <div className={styles.group}>
      <input
        type={type}
        placeholder={placeholder}
        id={placeholder}
        className={styles.input}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <label className={styles.label} htmlFor={placeholder}>
        {placeholder}
      </label>
    </div>
  );
}
