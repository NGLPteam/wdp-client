import classNames from "classnames";
import IconFactory, {
  type IconKeys,
} from "components/factories/IconFactory/IconFactory";
import { Link } from "components/atomic";
import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  icon?: IconKeys | null;
  url?: string | null;
  className?: string | null;
  display?: "present" | "empty";
};

export default function HeroSidebarItem({
  icon,
  url,
  children,
  display,
}: Props) {
  return display === "present" ? (
    <li className={classNames("t-label-sm", styles.heroSidebarItem)}>
      {!!icon && <IconFactory icon={icon} role="presentation" />}
      {url ? (
        <Link target="_blank" rel="noreferrer" href={url}>
          <span>{children}</span>
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </li>
  ) : null;
}
