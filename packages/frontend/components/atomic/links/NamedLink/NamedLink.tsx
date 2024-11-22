import Link from "next/link";
type LinkProps = React.ComponentProps<typeof Link>;

const NamedLink = ({ children, href, as, ...props }: Props) => {
  const isLink = !as || as === "a";

  return href ? (
    <Link
      as={as}
      href={href}
      prefetch={isLink ? false : undefined}
      className={props.className ? props.className : "no-default-link-styles"}
    >
      {children}
    </Link>
  ) : null;
};

interface Props extends Omit<LinkProps, "href"> {
  href?: string;
}

export default NamedLink;
