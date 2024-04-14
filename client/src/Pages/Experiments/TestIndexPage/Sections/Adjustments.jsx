import React from "react";
import VideoDemo from "../../../../Components/VideoDemo/VideoDemo";
import CodeHighlighter from "../../../../Components/CodeBlock/CodeBlock";

const Adjustments = () => {
  return (
    <>
      <p className="basic-text">
        The index tray interferes with the app switcher on iOS devices making it
        difficult to swipe through the tray and accidentally activating the app
        switcher. The same is not the case with Android devices or Safari on
        mobile devices.
      </p>
      <VideoDemo src={"https://imharsh.s3.eu-north-1.amazonaws.com/IS_1.MP4"} />
      <p className="basic-text">
        {" "}
        To make sure that the app switcher does not interfere with the tray, we
        add a extra 25px padding at the bottom of the tray when scrolling up on
        Chrome on iOS devices.
      </p>

      <CodeHighlighter
        code={`      if (currentScrollPosition > lastScrollPosition) {
        if (indexTray.current)
          //elevated padding for CriOS
          indexTray.current.style.paddingBottom = "var(--elevated-padding)";
      } else if (currentScrollPosition < lastScrollPosition) {
        if (indexTray.current)
          indexTray.current.style.paddingBottom = "var(--normal-padding)";
      }`}
      />

      <p className="basic-text">
        To make sure that the right index gets highlighted when the
        corresponding section comes into the page view, I use the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          target="_blank"
          className="inline-link"
        >
          Intersection Observer API.
        </a>
      </p>

      <CodeHighlighter
        code={`    useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const visibleSections = list.filter((_, idx) => {
        const section = document.getElementById(\`\${identifier}-\${idx}\`);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= viewportHeight;
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
      threshold: 0.4,
    });

    list.forEach((_, idx) => {
      const section = document.getElementById(\`\${identifier}-\${idx}\`);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);`}
      />
    </>
  );
};

export default Adjustments;
