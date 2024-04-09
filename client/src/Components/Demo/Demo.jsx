import React from "react";
import "./Demo.css";

const Demo = ({ children, label }) => {
  return (
    <div className="cd-wrap">
      {children}
      <div className="cd-label">
        {label && (
          <ul>
            {label.map((l, idx) => {
              return (
                <li key={idx} className="cd-li">
                  <small className="demo-label">{l}</small>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Demo;
