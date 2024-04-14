import React, { useEffect, useRef, useState } from "react";
import "./IndexSystem.css";
import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";

import Demo from "../../../Components/Demo/Demo";
import IssueTable from "../../../Components/IssueTable/IssueTable";
import Intro from "./Intro";
import VideoDemo from "../../../Components/VideoDemo/VideoDemo";

const IndexList = [
  "Overview",
  "Requirements",
  "Layout",
  "Design",
  "Easing",
  "Adjustments",
  "Known Issues",
];

const bugs = [
  {
    bug: "Increased tray height when scrolling down using the index tray.",
    status: "In Progress - RCA",
  },
];

const IndexTray = ({ ease }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const itemTrayRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (itemTrayRef.current) {
          itemTrayRef.current.style.paddingBottom = "40px";
        }
      } else {
        if (itemTrayRef.current) {
          itemTrayRef.current.style.paddingBottom = "10px";
        }
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOSChrome = navigator.userAgent.includes("CriOS");
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isAndroid) console.log(isAndroid ? "Android" : "Not Android");
    if (isIOSChrome) console.log(isIOSChrome ? "iOS Chrome" : "Not iOS Chrome");
    if (isSafari) console.log(isSafari ? "Safari" : "Not Safari");

    if (
      window.innerWidth < 500 &&
      isMobileDevice &&
      !isAndroid &&
      (!isSafari || isIOSChrome)
    ) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleClick = (id) => {
    var scrollDuration = window.innerWidth < 500 ? 2000 : 1500;
    const element = document.getElementById(id);
    if (ease) {
      smoothScrollIntoView(element, {
        behavior: "smooth",
        scrollMode: "if-needed",
        ease: (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        duration: scrollDuration,
      });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={itemTrayRef} className="index-tray">
      {IndexList.map((item, i) => {
        return (
          <a
            href={`#is-${i + 1}`}
            key={i}
            className="index-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick(`is-${i + 1}`);
            }}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
};
const IndexSystem = () => {
  const [smoothEase, setSmoothEase] = React.useState(true);

  return (
    <div className="is-wrap">
      <h2 className="header" id="is-1">
        Index System
      </h2>
      <small>Week 14, 2024</small>
      <Intro />
      <h2 className="sub-header" id="is-2">
        Requirements
      </h2>
      Some key things that I wanted to achieve were:
      <br />
      <br />
      <ul>
        <li>Consistent layout across all screen sizes </li>
        <li>
          Easily accessible -{" "}
          <span className="muted">
            {" "}
            the table of contents (index) should always be available to the
            quickly navigate to other sections
          </span>
        </li>
        <li>
          Accesibility - <span className="muted">Design for all</span>
        </li>
      </ul>
      <h2 className="sub-header" id="is-3">
        Layout
      </h2>
      <p className="basic-text">
        Since I wanted the index to be available at all times, the edges of the
        screen became the optimal placement, as the content naturally occupies
        the center.
        <br />
        <br />
        I decided to discard the option of having the tray on the sides because
        it wouldn't maintain a consistent layout across different screen sizes.
        <br />
        <br />
        I chose not to go with the top position because it might interfere with
        headers, navbars and other elements typically found on top. Plus, having
        a tray at the top might distract users as they naturally read from top
        to bottom. So, I settled on placing it at the bottom.
        <br />
        <br />
        The bottom felt more natural for a couple of reasons:
      </p>
      <br />
      <ul>
        <li>
          The index behaves like a navigation tray -{" "}
          <span className="muted">
            similar to a navigation bar at the bottom of the screen in mobile
            apps and felt natural.
          </span>
        </li>
        <li>
          Not distracting -{" "}
          <span className="muted">
            as the focus while reading is mostly in the top half of the screen,
            the tray at the bottom does not distract the reader while always
            being there for quick navigation.
          </span>
        </li>
        <li>
          Easily accesible using the thumb on mobile -{" "}
          <span className="muted">ergonomic one handed use</span>
        </li>
      </ul>
      <h2 className="sub-header" id="is-4">
        Design
      </h2>
      <p className="basic-text">
        The index stays at the bottom with a <code>position: fixed</code> and{" "}
        <code>bottom: 0px</code> for screen-width {"<"} 500px and{" "}
        <code>bottom: 10px</code> for screen-width {">"} 500px.
        <br />
        <br />
        Finally, a minimal tray with a background color slightly different from
        the page's background color felt the best choice. Also added, soft
        outline to show the edges of the tray and a slight shadow to give a
        sense of depth.
      </p>
      <h2 className="sub-header" id="is-5">
        Easing
      </h2>
      <p className="basic-text">
        Using <code>scrollIntoView()</code> to navigate to the relevant section
        made an abrupt transition to the section thus making the experience a
        bit jarring. I wanted the scroll to be smooth for two reasons. First, it
        gives a sense of contnuity. Second, a smooth transition gives a
        understanding of where the section is present in the page.
        <br />
        <br />
        To enhance the user experience and provide a smoother navigation
        transition within sections of the webpage, I've implemented the{" "}
        <a
          className="external-link"
          target="_blank"
          href="https://www.npmjs.com/package/smooth-scroll-into-view-if-needed"
        >
          smooth-scroll-into-view-if-needed
        </a>{" "}
        library. <br />
        <br /> This library allows for greater control over the scroll behavior,
        ensuring a more seamless and natural feel for users. The scroll duration
        is set to 1500ms for desktop devices and 2000ms for mobile devices,
        providing an optimal balance between speed and smoothness. <br />
        <br />
        Try out navigating to other sections with the smooth scroll disabled
      </p>
      <Demo label={["The difference is more noticable on mobile screens"]}>
        <button
          onClick={() => setSmoothEase(!smoothEase)}
          className="btn-primary"
        >
          {smoothEase ? "Disable Smooth Scroll" : "Enable Smooth Scroll"}
        </button>
      </Demo>
      <h2 className="sub-header" id="is-6">
        Adjustments
      </h2>
      <p className="basic-text">
        The index tray interferes with the app switcher on iOS devices making it
        difficult to swipe through the tray and accidentally activating the app
        switcher. The same is not the case with Android devices or Safari on
        mobile devices.
        <br />
      </p>
      <br />
      <VideoDemo src={"https://imharsh.s3.eu-north-1.amazonaws.com/IS_1.MP4"} />
      <p className="basic-text">
        <br />
        To make sure that the app switcher does not interfere with the tray, we
        add a extra 20px padding to the bottom of the tray when scrolling up on
        Chrome on iOS devices.
      </p>
      <h2 className="sub-header" id="is-6">
        Known Issues
      </h2>
      <IssueTable bugs={bugs} />
      <IndexTray ease={smoothEase} />
    </div>
  );
};

export default IndexSystem;
