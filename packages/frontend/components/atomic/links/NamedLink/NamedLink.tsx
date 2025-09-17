import classNames from "classnames";
import { Link } from "@/lib/vendor/react-transition-progress/link";
type LinkProps = React.ComponentProps<typeof Link>;
import styles from "./NamedLink.module.css";

const NamedLink = ({
  children,
  href,
  as,
  prefetch = false,
  scroll,
  ...props
}: Props) => {
  return href ? (
    <Link
      as={as !== "a" ? as : undefined}
      prefetch={prefetch}
      scroll={scroll}
      href={href}
      className={classNames(
        props.className,
        styles.link,
        "no-default-link-styles",
      )}
      aria-current={props["aria-current"]}
    >
      {children}
    </Link>
  ) : (
    <span className={props.className}>{children}</span>
  );
};

interface Props extends Omit<LinkProps, "href"> {
  href?: string | null;
}

export default NamedLink;
