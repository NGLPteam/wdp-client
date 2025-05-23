import { PropsWithChildren } from "react";
import classNames from "classnames";
import { HeroBackground } from "@/types/graphql-schema";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import styles from "./Container.module.css";

interface Props extends PropsWithChildren {
  as?: "section" | "article" | "header" | "div" | "footer";
  width?: "wide" | "max";
  bgColor?: HeroBackground | null;
  className?: string;
  id?: string;
  innerClassName?: string;
  hideDivider?: boolean;
  halfWidthTemplate?: boolean;
}

export default function Container({
  as = "section",
  width = "wide",
  bgColor = "NONE",
  className,
  id,
  children,
  halfWidthTemplate,
  hideDivider = false,
}: Props) {
  const Tag = as;

  const bgClass = getBgClass(bgColor);

  return (
    <Tag id={id} className={bgClass} data-half={halfWidthTemplate || undefined}>
      <div
        className={classNames(`l-container-${width}`, {
          [`${className}`]: !!className,
          [styles.half]: halfWidthTemplate,
          [styles.divider]: !hideDivider,
        })}
      >
        {children}
      </div>
    </Tag>
  );
}
