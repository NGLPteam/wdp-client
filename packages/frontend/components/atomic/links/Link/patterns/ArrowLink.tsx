import React, { forwardRef, Ref } from "react";
import { MaybeLinkRef } from "@castiron/common-types";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link>;

function ArrowLink(
  { children, ...props }: BaseProps,
  ref: MaybeLinkRef | Ref<HTMLAnchorElement>,
) {
  return (
    <Link ref={ref} {...props} icon="arrowRight">
      {children}
    </Link>
  );
}

export default forwardRef(ArrowLink);
