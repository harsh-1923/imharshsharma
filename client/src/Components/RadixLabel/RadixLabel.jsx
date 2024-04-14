import React, { useRef } from "react";
import "./RadixLabel.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import POP from "../../assets/audio/POP.mp3";

const RadixLabel = ({
  accentColor = "var(--accent)",
  label = "Checkbox label",
  labelColor = "var(--text-primary)",
  size = "var(--radix-label-size)",
  icon = <CheckIcon />,
  onChange,
  toChange,
  defaultChecked = false,
}) => {
  const audioRef = useRef(null);
  return (
    <div className="radix-label">
      <audio ref={audioRef} volume={0.5}>
        <source src={POP} type="audio/mpeg" />
      </audio>
      <Checkbox.Root
        defaultChecked={defaultChecked}
        onClick={() => {
          if (audioRef.current) audioRef.current.play();
          onChange(!toChange);
        }}
        className="radix-label-root"
        style={{ backgroundColor: accentColor, width: size, height: size }}
        id="c1"
      >
        <Checkbox.Indicator className="radix-label-indicator">
          {icon}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="radix-checkbox-label" htmlFor="c1">
        {label}
      </label>
    </div>
  );
};

export default RadixLabel;
