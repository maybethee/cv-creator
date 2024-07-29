import { useState } from "react";

function GenInfo({ state, handleChange }) {
  return (
    <>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Tel:{" "}
        <input
          type="tel"
          name="tel"
          value={state.tel}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default GenInfo;
