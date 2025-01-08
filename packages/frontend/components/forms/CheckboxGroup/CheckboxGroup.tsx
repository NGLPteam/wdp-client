import React from "react";
import Label from "../Label";
import styles from "./CheckboxGroup.module.css";

export default function CheckboxGroup({ children, label, ...props }: Props) {
  return (
    <fieldset className={styles.wrapper} {...props}>
      <Label as="legend" className="t-label-sm a-color-light">
        {label}
      </Label>
      {children}
    </fieldset>
  );
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  label: string;
}
