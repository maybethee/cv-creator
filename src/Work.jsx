import { useState } from "react";

function Work({ state, handleChange }) {
  return (
    <>
      <label>
        Company Name:{" "}
        <input
          type="text"
          name="company"
          value={state.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Position Title:{" "}
        <input
          type="text"
          name="position"
          value={state.position}
          onChange={handleChange}
        />
      </label>
      <label>
        Responsibilities:{" "}
        <textarea
          name="responsibilities"
          value={state.responsibilities}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Start Date:{" "}
        <input
          type="date"
          name="started"
          value={state.started}
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:{" "}
        <input
          type="date"
          name="ended"
          value={state.ended}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default Work;
