import React from "react";
import "./section.css";

const Requirements = () => {
  return (
    <>
      <p className="basic-text-muted">
        While thinking about this index system, there were a few things that I
        wanted to focus on while coming up with a solution. Here are a few of
        them:
        <br />
        <br />
      </p>
      <ul>
        <li>Consistent layout across all screen sizes </li>
        <li>
          Easily available -{" "}
          <span className="muted">
            {" "}
            I am not a big fan of using a button to toggle the index in and out
            of the view on smaller screens. I wanted something that was always
            available for quick navigation
          </span>
        </li>
        <li>
          Accesibility - <span className="muted">Easy keyboard navigation</span>
        </li>
      </ul>
    </>
  );
};

export default Requirements;
