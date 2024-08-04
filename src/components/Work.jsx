import { useState } from "react";
import styles from "./../styles/work.module.css";

function Work({ state, handleChange }) {
  return (
    <div className={styles.work}>
      <label className={styles.label}>
        Company Name:{" "}
        <input
          className={styles.input}
          type="text"
          name="company"
          value={state.company}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        Position Title:{" "}
        <input
          className={styles.input}
          type="text"
          name="position"
          value={state.position}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <div className={styles.container}>
        <label className={styles.label}>Responsibilities: </label>

        <textarea
          className={styles.textarea}
          name="responsibilities"
          value={state.responsibilities}
          onChange={handleChange}
          cols="60"
          rows="5"
        ></textarea>
      </div>
      <hr></hr>
      <label className={styles.label}>
        Start Date:{" "}
        <input
          className={styles.input}
          type="date"
          name="started"
          value={state.started}
          onChange={handleChange}
        />
      </label>
      <hr></hr>
      <label className={styles.label}>
        End Date:{" "}
        <input
          className={styles.input}
          type="date"
          name="ended"
          value={state.ended}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Work;
