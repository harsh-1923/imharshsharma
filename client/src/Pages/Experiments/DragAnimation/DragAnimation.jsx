import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./DragAnimation.css";
import * as Slider from "@radix-ui/react-slider";

import TICK from "../../../assets/audio/TICK.mp3";

import RadixLabel from "../../../Components/RadixLabel/RadixLabel";

const Demo1 = () => {
  const daDemo1DragConstraints = useRef(null);
  const daDemo1Draggable = useRef(null);
  const audioRef = useRef(null);
  const [daDemo1OffsetX, setDaDemo1OffsetX] = useState(0);
  const [daDemo1OffsetY, setDaDemo1OffsetY] = useState(0);

  const [daDemo1DeltatX, setDaDemo1DeltatX] = useState(0);
  const [daDemo1DeltatY, setDaDemo1DeltatY] = useState(0);

  const [daDemo1VelX, setDaDemo1VelX] = useState(0);
  const [daDemo1VelY, setDaDemo1VelY] = useState(0);
  const [lockX, setLockX] = useState(false);
  const [lockY, setLockY] = useState(false);
  const [ev, setEV] = useState(0.1);
  const [isDragging, setIsDragging] = useState(false);

  const setLocks = () => {
    if (!lockX && !lockY) return true;
    if (lockX) {
      if (lockY) return false;

      return "x";
    } else {
      if (lockX) return fasle;

      return "y";
    }
  };

  const playAudio = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handleDrag = (e, info) => {
    setDaDemo1DeltatX(Math.floor(info.delta.x));
    setDaDemo1DeltatY(Math.floor(info.delta.y));

    setDaDemo1OffsetX(Math.floor(info.offset.x));
    setDaDemo1OffsetY(Math.floor(info.offset.y));

    setDaDemo1VelX(Math.floor(info.velocity.x));
    setDaDemo1VelY(Math.floor(info.velocity.y));
  };
  return (
    <div className="da-demo1-wrap">
      <audio ref={audioRef}>
        <source src={TICK} type="audio/mpeg" />
      </audio>
      <div className="da-demo1-test">
        <code className="block-code">
          D<sub>x</sub> : {daDemo1OffsetX} <br /> D<sub>y</sub> :{" "}
          {daDemo1OffsetY}
        </code>
        <br />
        <code className="block-code">
          V<sub>x</sub> : {daDemo1VelX} <br /> V<sub>y</sub> : {daDemo1VelY}
        </code>
      </div>
      <div
        ref={daDemo1DragConstraints}
        data-state-reveal={`${isDragging ? "true" : "false"}`}
        className="da-demo1-drag-constraints"
      >
        <motion.div
          ref={daDemo1Draggable}
          dragElastic={ev}
          dragConstraints={daDemo1DragConstraints}
          dragSnapToOrigin
          drag={setLocks()}
          className="draggable"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={(e, info) => handleDrag(e, info)}
        ></motion.div>
      </div>
      <div className="da-demo1-controls-wrap">
        <h3>Controls</h3>
        <form className="da-demo1-controls">
          <small>Drag Elastic</small>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[ev]}
            max={2}
            step={0.1}
            onValueCommit={(e) => setEV(e[0])}
            onValueChange={playAudio}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Drag Elastic" />
          </Slider.Root>

          <RadixLabel
            onChange={setLockX}
            toChange={lockX}
            label="Lock Drag on X-axis"
          />

          <RadixLabel
            onChange={setLockY}
            toChange={lockY}
            label="Lock Drag on Y-axis"
          />

          <p>
            {" "}
            {lockX && lockY ? (
              <small>Can't drag with X and Y locked together</small>
            ) : lockX === false && lockY === false ? (
              <small>Freely draggable</small>
            ) : (
              <small>
                Dragging in {lockX && "X"} {lockY && `${lockX ? "and" : ""} Y`}
              </small>
            )}
          </p>
        </form>

        {/* <div className="stats-wrap">
          <div className="stats-row">
            <label>Offset</label>
            <small>X : {daDemo1OffsetX}</small>
            <small>Y : {daDemo1OffsetY}</small>
          </div>

          <div className="stats-row">
            <label>Velocity</label>
            <small>X : {daDemo1OffsetX}</small>
            <small>Y : {daDemo1OffsetY}</small>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const DragAnimation = () => {
  return (
    <div className="da-page-wrap">
      <Demo1 />
    </div>
  );
};

export default DragAnimation;
