import React from "react";
import "./VideoDemo.css";

const VideoDemo = ({ src, autoPlay = false }) => {
  return (
    <div className="video-demo">
      <video className="vd" src={src} autoPlay={autoPlay} loop controls></video>
    </div>
  );
};

export default VideoDemo;
