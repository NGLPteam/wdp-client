import React from "react";
import IconProps from "./iconType";

const IconToggle = ({ checked = false, title, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 46 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Toggle switch"}</title>
      <rect
        x="1"
        y="1"
        width="44"
        height="24"
        rx="12"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x={checked ? "25.5" : "5.5"}
        y="5.5"
        width="15"
        height="15"
        rx="7.5"
        fill="#fff"
        stroke="currentColor"
        data-toggle-indicator
      />
    </svg>
  );
};

interface Props extends IconProps {
  checked?: boolean;
}

export default IconToggle;
