import React, { useState, useEffect, useRef } from "react";
import "./Context.css";

const Context = ({ children, parent, text }) => {
  const [open, setOpen] = useState(false);

  const originalWord = useRef(null);
  const contextPortal = useRef(null);
  const test = useRef(null);

  const handleOpen = () => {
    setOpen(!open);

    if (contextPortal.current) {
      contextPortal.current.style.top = `${
        originalWord.current.getBoundingClientRect().top +
        originalWord.current.getBoundingClientRect().height +
        10
      }px`;

      console.log(parent.current.getBoundingClientRect().right);
      console.log(contextPortal.current.getBoundingClientRect().width);
      console.log(test.current?.getBoundingClientRect().width);

      contextPortal.current.style.left = `${Math.min(
        originalWord.current.getBoundingClientRect().left,
        parent.current.getBoundingClientRect().right -
          contextPortal.current.getBoundingClientRect().width
      )}px`;
    }
  };

  return (
    <div className="context-wrap">
      <div
        ref={originalWord}
        data-state-open={`${open ? "true" : "false"}`}
        onClick={handleOpen}
        className="original-word"
      >
        {children}
        <div
          className="context-portal"
          //   style={{ maxWidth: parent.current?.getBoundingClientRect().width }}
          x
          ref={contextPortal}
        >
          {open && <p>{text}</p>}
        </div>
      </div>
      {open && (
        <>
          <div className="context-overlay" onClick={() => setOpen(false)}></div>
        </>
      )}
    </div>
  );
};

export default Context;
