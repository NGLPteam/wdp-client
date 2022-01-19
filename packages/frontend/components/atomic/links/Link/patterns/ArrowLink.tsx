import React, { forwardRef, Ref } from "react";
import Link from "..";
import { MaybeLinkRef } from "types/ref";

type BaseProps = React.ComponentProps<typeof Link>;

function ArrowLink(
  { children, ...props }: BaseProps,
  ref: MaybeLinkRef | Ref<HTMLSpanElement>
) {
  return (
    <Link ref={ref} {...props} icon="arrowRight">
      {children}
    </Link>
  );
}

export default forwardRef(ArrowLink);
