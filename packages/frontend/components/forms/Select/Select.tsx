import { forwardRef, SelectHTMLAttributes } from "react";
import classNames from "classnames";
import { MaybeSelectRef } from "@castiron/common-types";
import IconFactory from "@/components/factories/IconFactory";
import Label from "../Label";
import styles from "./Select.module.css";

function Select(
  {
    id,
    children,
    block,
    size,
    label,
    hideLabel,
    secondary,
    className,
    ...props
  }: Props & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  ref: MaybeSelectRef,
) {
  return (
    <div className={className}>
      {label && (
        <Label htmlFor={id} className={hideLabel && "sr-only"}>
          {label}
        </Label>
      )}
      <div
        className={classNames(styles.wrapper, {
          [styles["wrapper--default"]]: !secondary,
          [styles["wrapper--secondary"]]: secondary,
          [styles["wrapper--lg"]]: size === "lg",
          [styles["wrapper--block"]]: block,
        })}
      >
        <select
          className={classNames(styles.select, {
            [styles["select--secondary"]]: secondary,
          })}
          id={id}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <span className={styles.icon}>
          <IconFactory icon="chevronDown" />
        </span>
      </div>
    </div>
  );
}

export default forwardRef(Select);

interface Props {
  id?: string;
  children: React.ReactNode;
  block?: true;
  size?: "lg";
  label?: string;
  hideLabel?: true;
  secondary?: true;
  className?: string;
}
