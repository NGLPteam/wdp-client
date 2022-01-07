import React, { forwardRef, Ref } from "react";
import * as Styled from "./ArrowLink.styles";
import { IconFactory } from "components/factories";
import { MaybeLinkRef } from "types/ref";

function ArrowLink(
  { children, as = "a", className, ...props }: Props,
  ref: MaybeLinkRef | Ref<HTMLSpanElement>
) {
  const Tag = as;

  return (
    <Styled.Link
      as={Tag}
      className={`a-link ${className}`}
      ref={ref}
      {...props}
    >
      <span>{children}</span>
      <IconFactory icon="arrowRight" />
    </Styled.Link>
  );
}

export default forwardRef(ArrowLink);

interface Props {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
}
