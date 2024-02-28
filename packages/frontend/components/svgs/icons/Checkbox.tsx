import React from "react";
import Props from "./iconType";

const Checkbox = ({ title: _title, fill: _fill, ...props }: CheckboxProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        data-path-name="box"
        stroke="currentColor"
        fill="var(--checkbox-fill, #FFF)"
      />
      <path
        d="M3 8L7 11.5L13 4.5"
        stroke="currentColor"
        fill="none"
        data-path-name="check"
      />
    </svg>
  );
};

interface CheckboxProps extends Props {
  checked?: boolean;
}

export default Checkbox;
