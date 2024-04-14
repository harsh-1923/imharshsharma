import React from "react";

const Easing = ({ smoothScroll, setSmoothScroll }) => {
  return (
    <>
      <p className="basic-text">
        Using <code className="block-code">scrollIntoView</code> scrolls to the
        next section abruptly and the scroll doesn't feel natural, making the
        experience a little jarring. I wanted the scroll behavior to be smooth
        for two reasons.
        <br />
        <br />
        First, it provides continuity to the next section. It doesn't give the
        feel that the next section is on another page. Additionally, it enhances
        user navigation by providing clear contextual cues, aiding in locating
        desired sections efficiently.
        <br />
        <br />
        For smooth scroll behavior, I have used{" "}
        <a
          href="https://www.npmjs.com/package/smooth-scroll-into-view-if-needed"
          target="_blank"
          className="inline-link"
        >
          smooth-scroll-into-view-if-needed
        </a>{" "}
        library. The library allows for greater control over the scroll
        behavior. The scroll duration is set to{" "}
        <code className="block-code">1500ms</code> for desktop devices and{" "}
        <code className="block-code">2000ms</code> for mobile devices, providing
        an optimal balance between speed and smoothness.
        <br />
        <br />
        Try toggling the scroll behavior and navigation around the page.
      </p>
      <div className="outline-demo-area">
        <button
          className="demo-button"
          onClick={() => setSmoothScroll(!smoothScroll)}
        >
          {smoothScroll ? "Disable Smooth Scroll" : "Enable Smooth Scroll"}
        </button>

        <small>
          The effect is more pronounced on taller or mobile screens due to
          extensive scrolling between sections.
        </small>
      </div>
    </>
  );
};

export default Easing;
