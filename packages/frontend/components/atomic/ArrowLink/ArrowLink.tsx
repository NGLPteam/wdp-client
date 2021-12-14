import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./ArrowLink.styles";
import { IconFactory } from "components/factories";
import { MaybeLinkRef } from "types/ref";

function ArrowLink(
  { label, as = "a", className, ...props }: Props,
  ref: MaybeLinkRef | Ref<HTMLSpanElement>
) {
  const { t } = useTranslation();
  const Tag = as;

  return (
    <Styled.Link as={Tag} className={className} ref={ref} {...props}>
      <span>{t(label)}</span>
      <IconFactory icon="arrowRight" />
    </Styled.Link>
  );
}

export default forwardRef(ArrowLink);

interface Props {
  label: string;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
}
