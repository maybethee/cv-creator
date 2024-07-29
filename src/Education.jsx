import { useState } from "react";

function Education({ state, handleChange }) {
  return (
    <>
      <label>
        School Name:{" "}
        <input
          type="text"
          name="school"
          value={state.school}
          onChange={handleChange}
        />
      </label>
      <label>
        Degree Title:{" "}
        <input
          type="text"
          name="degree"
          value={state.degree}
          onChange={handleChange}
        />
      </label>
      <label>
        Graduation Year:{" "}
        <input
          type="text"
          name="graduated"
          value={state.graduated}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default Education;
