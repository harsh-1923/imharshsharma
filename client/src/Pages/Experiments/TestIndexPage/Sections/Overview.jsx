import React from "react";
import "./section.css";
import CodeHighlighter from "../../../../Components/CodeBlock/CodeBlock";

const Overview = () => {
  return (
    <>
      <p className="basic-text-muted">
        I have always enjoyed blogs or articles which have a proper index system
        or trable of contents to give a quick overview of the contents of the
        page. Besides giving a quick overview, its convenient to use the index
        to skip over to a section of the page quickly.
        <br />
        <br />
        <a
          href="https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm#Original_sources"
          target="_blank"
          className="inline-link"
        >
          Articles on Wikipedia
        </a>{" "}
        have a nice table of contents (or index) for quick navigation through
        the article. However, this index moves out of the view for smaller
        screen sizes and is completely unavailable for mobile screen sizes.
        Considering that Wikipedia underwent a redesign recently, it was
        confusing to not see such a fundamental feature for smaller sizes.
        <br />
        <br />
        That made me think if there was a way to integrate a index that would
        serve its purpose across all screen sizes. I share my explorations here
        in this article.
      </p>
    </>
  );
};

export default Overview;
