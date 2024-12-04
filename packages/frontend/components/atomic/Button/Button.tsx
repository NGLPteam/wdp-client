import { forwardRef, ComponentProps, type PropsWithChildren } from "react";
import classNames from "classnames";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Button.module.css";
import type { MaybeButtonRef } from "@castiron/common-types";

/**
 * This component can be used as a button or link, and uses the a-button utility classes.
 */
const Button = forwardRef(
  (
    {
      children,
      className,
      icon,
      size,
      secondary,
      iconLeft,
      hideLabelOnMobile,
      isBlock,
      ...props
    }: (Props | LinkProps) & PropsWithChildren,
    ref: MaybeButtonRef,
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(styles.button, className, {
          [styles["button--secondary"]]: !!secondary,
          [styles["button--block"]]: !!isBlock,
          [styles["button-hideLabelMobile"]]: hideLabelOnMobile && !!icon,
          [styles["button--sm"]]: size === "sm",
        })}
        {...props}
      >
        {icon && iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
        {children && (
          <span
            className={classNames(styles.label, {
              [styles["label--hideOnMobile"]]: hideLabelOnMobile && !!icon,
            })}
          >
            {children}
          </span>
        )}
        {icon && !iconLeft && (
          <IconFactory icon={icon} role={children ? "presentation" : "img"} />
        )}
      </button>
    );
  },
);

export default Button;

interface Props extends ComponentProps<"button"> {
  /** Button size - default is large */
  size?: "lg" | "sm";
  /** Show icon on the left */
  iconLeft?: true;
  /** Hide the label on mobile devices */
  hideLabelOnMobile?: true;
  /** Display as a block element */
  isBlock?: true;
  /** Use secondary style */
  secondary?: true;
  icon?: React.ComponentProps<typeof IconFactory>["icon"];
  className?: string;
}

type LinkProps = Props & {
  as: string;
  href?: string;
  target?: string;
  download?: boolean;
};
