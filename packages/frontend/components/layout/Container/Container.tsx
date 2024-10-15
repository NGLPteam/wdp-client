import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends PropsWithChildren {
  as?: "section" | "article" | "header" | "div" | "footer";
  width?: "wide" | "max";
  blockPadding?: "lg" | "md" | "sm" | "xSm";
  bgColor?: "none" | "light" | "dark";
  className?: string;
  id?: string;
  innerClassName?: string;
}

const BG_COLOR_MAP = {
  none: "a-bg-custom10",
  light: "a-bg-custom20",
  dark: "a-bg-neutral90",
};

export default function Container({
  as = "section",
  width = "wide",
  bgColor = "none",
  className,
  id,
  children,
}: Props) {
  const Tag = as;

  const bgClass = BG_COLOR_MAP[bgColor];

  return (
    <Tag id={id} className={bgClass}>
      <div
        className={classNames({
          [`l-container-${width}`]: true,
          [`${className}`]: !!className,
        })}
      >
        {children}
      </div>
    </Tag>
  );
}
