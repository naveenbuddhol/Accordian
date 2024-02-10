import React from "react";
import ReactDOM from "react-dom/client";
import Accordian from "./Accordian";

const App = () => {
  return (
    <div className="app">
      <Accordian />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
