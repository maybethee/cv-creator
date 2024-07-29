import { useState } from "react";
import GenInfo from "./GenInfo";
import Education from "./Education";
import Work from "./Work";

function ApplicationWrapper() {
  const [state, setState] = useState({
    name: "",
    email: "",
    tel: "",
    school: "",
    degree: "",
    graduated: "",
    company: "",
    position: "",
    responsibilities: "",
    started: "",
    ended: "",
  });

  const [submittedValues, setSubmittedValues] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setState((prevState) => {
      const newState = { ...prevState, [e.target.name]: value };
      return newState;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(state);

    setSubmittedValues((oldValues) => [...oldValues, state]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="page-wrapper">
        <h1>CV Creator</h1>
        <div
          className="cv-wrapper"
          style={{
            padding: "3rem",
            border: "solid 2px black",
            borderRadius: "12px",
          }}
        >
          <section
            className="gen-info"
            style={{
              border: "solid 1px black",
              padding: "2rem",
              marginBottom: "1rem",
            }}
          >
            <GenInfo state={state} handleChange={handleChange} />
          </section>
          <section
            className="education"
            style={{
              border: "solid 1px black",
              padding: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Education state={state} handleChange={handleChange} />
          </section>
          <section
            className="work"
            style={{
              border: "solid 1px black",
              padding: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Work state={state} handleChange={handleChange} />
          </section>
        </div>

        <button type="submit">Submit</button>

        {submittedValues.map((values, i) => (
          <div key={i}>
            {Object.entries(values).map(([key, value]) => (
              <p key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </form>
  );
}

export default ApplicationWrapper;