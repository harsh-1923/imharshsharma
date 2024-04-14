/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import "./CodeBlock.css";

const fbCode = `  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollPosition > lastScrollPosition) {
        if (indexTray.current)
          //elevated padding for CriOS
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
  }, []);`;

function CodeHighlighter({ code = fbCode, theme = "github-dark" }) {
  const [highlightedCode, setHighlightedCode] = useState("");

  // THEME OPTIONS ARRAY
  // const themeOptions = [
  //   { name: "Andromeeda", preview: "andromeeda" },
  //   { name: "Aurora X", preview: "aurora-x" },
  //   { name: "Ayu Dark", preview: "ayu-dark" },
  //   { name: "Catppuccin Frappé", preview: "catppuccin-frappe" },
  //   { name: "Catppuccin Latte", preview: "catppuccin-latte" },
  //   { name: "Catppuccin Macchiato", preview: "catppuccin-macchiato" },
  //   { name: "Catppuccin Mocha", preview: "catppuccin-mocha" },
  //   { name: "Dark Plus", preview: "dark-plus" },
  //   { name: "Dracula", preview: "dracula" },
  //   { name: "Dracula Soft", preview: "dracula-soft" },
  //   { name: "GitHub Dark", preview: "github-dark" },
  //   { name: "GitHub Dark Default", preview: "github-dark-default" },
  //   { name: "GitHub Dark Dimmed", preview: "github-dark-dimmed" },
  //   { name: "GitHub Light", preview: "github-light" },
  //   { name: "GitHub Light Default", preview: "github-light-default" },
  //   { name: "Houston", preview: "houston" },
  //   { name: "Light Plus", preview: "light-plus" },
  //   { name: "Material Theme", preview: "material-theme" },
  //   { name: "Material Theme Darker", preview: "material-theme-darker" },
  //   { name: "Material Theme Lighter", preview: "material-theme-lighter" },
  //   { name: "Material Theme Ocean", preview: "material-theme-ocean" },
  //   { name: "Material Theme Palenight", preview: "material-theme-palenight" },
  //   { name: "Min Dark", preview: "min-dark" },
  //   { name: "Min Light", preview: "min-light" },
  //   { name: "Monokai", preview: "monokai" },
  //   { name: "Night Owl", preview: "night-owl" },
  //   { name: "Nord", preview: "nord" },
  //   { name: "One Dark Pro", preview: "one-dark-pro" },
  //   { name: "Poimandres", preview: "poimandres" },
  //   { name: "Red", preview: "red" },
  //   { name: "Rosé Pine", preview: "rose-pine" },
  //   { name: "Rosé Pine Dawn", preview: "rose-pine-dawn" },
  //   { name: "Rosé Pine Moon", preview: "rose-pine-moon" },
  //   { name: "Slack Dark", preview: "slack-dark" },
  //   { name: "Slack Ochin", preview: "slack-ochin" },
  //   { name: "Solarized Dark", preview: "solarized-dark" },
  //   { name: "Solarized Light", preview: "solarized-light" },
  //   { name: "Synthwave '84", preview: "synthwave-84" },
  //   { name: "Tokyo Night", preview: "tokyo-night" },
  //   { name: "Vesper", preview: "vesper" },
  //   { name: "Vitesse Black", preview: "vitesse-black" },
  //   { name: "Vitesse Dark", preview: "vitesse-dark" },
  //   { name: "Vitesse Light", preview: "vitesse-light" },
  // ];

  useEffect(() => {
    async function highlightCode() {
      try {
        const result = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            grid: false,
            theme,
            keepBackground: false,
            defaultLang: "jsx",
            showLineNumbers: "true",
          })
          .use(rehypeStringify)
          .process(code);

        setHighlightedCode(String(result));
      } catch (error) {
        console.error("Error highlighting code:", error);
      }
    }

    highlightCode();
  }, [code]);

  return (
    <pre className="cb-code-block">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} e></code>
    </pre>
  );
}

export default CodeHighlighter;
