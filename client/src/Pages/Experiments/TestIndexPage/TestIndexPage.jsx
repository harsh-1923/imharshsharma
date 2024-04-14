import React, { useState } from "react";
import "./TestIndexPage.css";
import IndexTray from "../../../Components/IndexTray/IndexTray";

import Overview from "./Sections/Overview";
import Requirements from "./Sections/Requirements";
import Layout from "./Sections/Layout";
import Design from "./Sections/Design";
import Easing from "./Sections/Easing";
import Adjustments from "./Sections/Adjustments";
import IssueTable from "../../../Components/IssueTable/IssueTable";
import Conclusion from "./Sections/Conclusion";
import Intro from "../IndexSystem/Intro";

const list = [
  "Overview",
  "Requirements",
  "Layout",
  "Design",
  "Easing and Scroll Behaviour",
  "Adjustments",
  "Known Issues",
];

const bugs = [
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
];

const TestIndexPage = () => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [smoothScroll, setsmoothScroll] = useState(true);
  return (
    <div className="ts-index-page">
      <div>
        <h2 className="header">Index System</h2>
        <small>Week 14, 2024</small>
        <Intro />
        <h2 id="tis-0" className="sub-header">
          Overview
        </h2>

        <Overview />
      </div>

      <section>
        <h2 id="tis-1" className="sub-header">
          Requirements
        </h2>
        <Requirements />
      </section>

      <section>
        <h2 id="tis-2" className="sub-header">
          Layout
        </h2>
        <Layout />
      </section>

      <section>
        <h2 id="tis-3" className="sub-header">
          Design
        </h2>
        <Design />
      </section>

      <section>
        <h2 id="tis-4" className="sub-header">
          Easing and Scroll Behavior
        </h2>
        <Easing setSmoothScroll={setsmoothScroll} smoothScroll={smoothScroll} />
      </section>

      <section>
        <h2 id="tis-5" className="sub-header">
          Adjustments
        </h2>
        <Adjustments />
      </section>

      <section>
        <h2 id="tis-6" className="sub-header">
          Known Issues
        </h2>

        <Conclusion />
      </section>

      <IndexTray
        selected={selectedIndex}
        handler={setselectedIndex}
        list={list}
        smoothScroll={smoothScroll}
      />
    </div>
  );
};

export default TestIndexPage;
