import { useState } from "react";
import GenInfo from "./GenInfo";
import Education from "./Education";
import Work from "./Work";
import "./../styles/application-wrapper.css";

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
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const value = e.target.value;

    setState((prevState) => {
      const newState = { ...prevState, [e.target.name]: value };
      return newState;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedValues([state]);

    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>CV Creator</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="page-wrapper">
            <div className="cv-wrapper">
              <section className="gen-info">
                <GenInfo state={state} handleChange={handleChange} />
              </section>
              <section className="education">
                <Education state={state} handleChange={handleChange} />
              </section>
              <section className="work">
                <Work state={state} handleChange={handleChange} />
              </section>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>

          <div className="generated-values">
            {submittedValues.map((values, i) => (
              <ul key={i}>
                {Object.entries(values).map(([key, value]) => (
                  <li key={key}>
                    <span className="key-label">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    : {value}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicationWrapper;
