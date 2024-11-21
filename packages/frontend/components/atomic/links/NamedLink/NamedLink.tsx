import Link from "next/link";
type LinkProps = React.ComponentProps<typeof Link>;
import * as Styled from "./NamedLink.styles";

const NamedLink = ({ children, href, as, ...props }: Props) => {
  return href ? (
    <Styled.Link
      as={as !== "a" ? as : undefined}
      href={href}
      prefetch={false}
      className={props.className ? props.className : "no-default-link-styles"}
      aria-current={props["aria-current"]}
    >
      {children}
    </Styled.Link>
  ) : (
    <span className={props.className}>{children}</span>
  );
};

interface Props extends Omit<LinkProps, "href"> {
  href?: string | null;
}

export default NamedLink;
