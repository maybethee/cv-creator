import { useState } from "react";
import styles from "./../styles/gen-info.module.css";

function GenInfo({ state, handleChange }) {
  return (
    <div className={styles.genInfo}>
      <label className={styles.label}>
        Name:{" "}
        <input
          className={styles.input}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        Email:{" "}
        <input
          className={styles.input}
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        Tel:{" "}
        <input
          className={styles.input}
          type="tel"
          name="tel"
          value={state.tel}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default GenInfo;
