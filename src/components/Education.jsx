import { useState } from "react";
import styles from "./../styles/education.module.css";

function Education({ state, handleChange }) {
  return (
    <div className={styles.education}>
      <label className={styles.label}>
        School Name:{" "}
        <input
          className={styles.input}
          type="text"
          name="school"
          value={state.school}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        Degree Title:{" "}
        <input
          className={styles.input}
          type="text"
          name="degree"
          value={state.degree}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        Graduation Year:{" "}
        <input
          className={styles.input}
          type="text"
          name="graduated"
          value={state.graduated}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Education;
