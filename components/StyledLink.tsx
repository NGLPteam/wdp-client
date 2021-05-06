import React from "react";
import Link from "next/link";

export default function StyledLink({ href, className, ...props }: Props) {
  return (
    <Link href={href} passHref>
      <a className={className} {...props} />
    </Link>
  );
}

interface Props extends React.HTMLProps<HTMLAnchorElement> {}