import React from "react";
import "./section.css";

const Design = () => {
  return (
    <>
      <p className="basic-text-muted">
        After trying out a few iteration of design choices - I stuck to a
        minimal layout with the background color slightly different from article
        or the main page background to create a subtle difference. A box shadow
        on the tray-root gives it the floating feel.
        <br />
        <br />
        The index tray behaves like a scrollbar and it is built with{" "}
        <a
          href="https://www.radix-ui.com/primitives/docs/components/scroll-area"
          target="_blank"
          className="inline-link"
        >
          Radix Primitives
        </a>{" "}
        to maintain the native scroll behavior across browsers and devices.
      </p>
    </>
  );
};

export default Design;
