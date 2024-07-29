import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GenInfo from "./GenInfo.jsx";
import ApplicationWrapper from "./ApplicationWrapper.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ApplicationWrapper>
      <GenInfo />
    </ApplicationWrapper>
  </React.StrictMode>
);
