import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";

export const isSafari = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isIOSChrome = () => {
  return navigator.userAgent.includes("CriOS");
};

export const isAndroid = () => {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const scrollToTop = () => {
  const element = document.getElementById("navbar");
  console.log(element);
  if (!element) return;
  smoothScrollIntoView(element, {
    behavior: "smooth",
    scrollMode: "if-needed",
    block: "start",
    ease: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    duration: 1500,
  });
};
