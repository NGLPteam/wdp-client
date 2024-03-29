import Link from "next/link";
type LinkProps = React.ComponentProps<typeof Link>;

const NamedLink = ({ children, href, ...props }: Props) => {
  return href ? (
    <Link
      href={href}
      className={props.className ? props.className : "no-default-link-styles"}
    >
      {children}
    </Link>
  ) : null;
};

interface Props extends Omit<LinkProps, "href"> {
  href: string;
}

export default NamedLink;
