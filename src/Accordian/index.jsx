import React, { useState } from "react";
import { data } from "./data";

import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiselection = (id) => {
    let newMultiple = [...multiple];
    const index = newMultiple.indexOf(id);
    if (index === -1) {
      newMultiple.push(id);
    } else {
      newMultiple.splice(index, 1);
    }
    setMultiple(newMultiple);
  };

  const handleEnableMultiSelection = () => {
    setMultiselection(!multiSelection);
  };

  return (
    <div className="wrapper">
      <button className="wrapper-btn" onClick={handleEnableMultiSelection}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length
          ? data.map((item) => (
              <div className="item" key={item.question}>
                <div
                  onClick={() => {
                    multiSelection
                      ? handleMultiselection(item.id)
                      : handleSingleSelection(item.id);
                  }}
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            ))
          : "No data"}
      </div>
    </div>
  );
};

export default Accordian;
