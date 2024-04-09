import React from "react";
import "./VideoDemo.css";

const VideoDemo = ({ src }) => {
  return (
    <div className="video-demo">
      <video className="vd" src={src} autoPlay={true} loop controls></video>
    </div>
  );
};

export default VideoDemo;
