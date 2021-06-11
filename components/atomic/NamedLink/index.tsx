import React from "react";
import Link from "next/link";
import { routes } from "helpers/routes";

function NamedLink({ route, params = {}, children, ...linkProps }) {
  const href = routes[route](params);

  return (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  );
}

export default NamedLink;
