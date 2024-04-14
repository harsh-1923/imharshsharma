import React, { useEffect, useState, useRef } from "react";
import "./IndexTray.css";

import * as ScrollArea from "@radix-ui/react-scroll-area";

import * as Utils from "../../utils.js";

import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";

import TopArrow from "../../Icons/TopArrow.jsx";

const IndexList = [
  "Overview",
  "Requirements",
  "Layout",
  "Design",
  "Easing",
  "Adjustments",
];

const IndexTray = ({
  list = IndexList,
  selected = 0,
  handler,
  identifier = "tis",
  smoothScroll = true,
}) => {
  const indexTray = useRef(null);

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollPosition > lastScrollPosition) {
        if (indexTray.current)
          //elevated padding for iOS Chrome
          indexTray.current.style.paddingBottom = "var(--elevated-padding)";
      } else if (currentScrollPosition < lastScrollPosition) {
        if (indexTray.current)
          indexTray.current.style.paddingBottom = "var(--normal-padding)";
      }

      lastScrollPosition = currentScrollPosition;
    };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOSChrome = navigator.userAgent.includes("CriOS");
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (
      window.innerWidth < 600 &&
      Utils.isMobile &&
      !isAndroid &&
      (!isSafari || isIOSChrome)
    ) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [intersectingSection, setIntersectingSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const visibleSections = list.filter((_, idx) => {
        const section = document.getElementById(`${identifier}-${idx}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= viewportHeight) {
            console.log(section);
            return true;
          }
        }
        return false;
      });
      if (visibleSections.length > 0) {
        setIntersectingSection(list.indexOf(visibleSections[0]));
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    list.forEach((_, idx) => {
      const section = document.getElementById(`${identifier}-${idx}`);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [list]);

  useEffect(() => {
    if (intersectingSection !== null) {
      handler(intersectingSection);
    }
  }, [intersectingSection, handler]);

  const handleChange = (scrollTo) => {
    var scrollDuration = window.innerWidth < 500 ? 2000 : 1500;
    const element = document.getElementById(identifier + "-" + scrollTo);
    if (!element) return;
    handler(scrollTo);

    if (smoothScroll) {
      smoothScrollIntoView(element, {
        behavior: "smooth",
        block: "start",
        ease: (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        duration: scrollDuration,
      });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="ts-index-tray">
      <ScrollArea.Root className="ts-index-root">
        <ScrollArea.Viewport className="ts-index-viewport">
          <div ref={indexTray} className="tray-wrap">
            <TopArrow onClick={() => handleChange(0)} />
            {list.map((tag, idx) => (
              <a
                onClick={() => handleChange(idx)}
                key={idx}
                data-selected={`${selected == idx ? "true" : "false"}`}
                className="tray-item"
                tabIndex={0}
              >
                {tag}
              </a>
            ))}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="ts-index-scrollbar"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="ts-tray-sroll-thumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
    </div>
  );
};

export default IndexTray;
