import * as React from "react";
import Link from "next/link";

export default function InstallationName({ className }: Props) {
  const linkClasses = "t-label-mix a-link";
  return (
    <Link href="/">
      <a className={className ? `${className} ${linkClasses}` : linkClasses}>
        WDP Installation Name
      </a>
    </Link>
  );
}

type Props = {
  className?: string;
};
