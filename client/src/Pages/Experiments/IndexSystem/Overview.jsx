import React from "react";

const Overview = () => {
  return (
    <>
      <h2 className="sub-header">Overview</h2>
      <p className="basic-text">
        I have been reading blogs and articles a lot lately, and I noticed that
        navigating through the page and quickly going form one section to
        another can be a bit of a hassle. Some pages have a proper table of
        contents that also act as hyperlinks taking you to the specific section
        of the page.
        <br /> <br />
        However, the experience on mobile and tablet devices is not as smooth as
        on desktop. In most cases, the table of contents is not visible on
        mobile devices. Some sites use a button to toggle the table of contents
        in and out of view, <i>but the experience always felt off to me</i>.
        <br />
        <br />
        This led me to think if there was another way to create a more intuitive
        and seamless experience for the user.
      </p>
    </>
  );
};

export default Overview;
