import React from "react";
import "./HomePage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Job from "../../Components/Job/Job";
import Intro from "../Experiments/IndexSystem/Intro";

const SubHeader = ({ title }) => {
  return <div className="subheader">{title}</div>;
};

const Home = () => {
  return (
    <div className="home-wrap">
      <HeroSection />
      <SubHeader title="Currently" />

      <Job title={"Software Developer @Airbus"} link={"https://www.airbus.com"}>
        Developing tools that enable various Airbus Simulators for development
        of new Aircrafts, pilot training, etc
      </Job>
      <SubHeader title="Previosly" />

      <Job
        title={"Software Developer Intern @SlangLabs"}
        link={"https://www.slanglabs.in/"}
      >
        Developed key features of Slang's WebSDK for CONVA, a generative AI
        powered Voice Assistant
      </Job>
      <SubHeader title="Experiments" />

      <Intro />

      <Job title={"Index System"} link={"/exp/index-system"} showIcon={false}>
        An attempt to create an intuitive index system for blogs and technical
        documentation
      </Job>
    </div>
  );
};

export default Home;
