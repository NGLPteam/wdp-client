import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Checkbox.styles";

function Checkbox({ label, ...props }: Props, ref: Ref<HTMLInputElement>) {
  const { t } = useTranslation();
  return (
    <Styled.Label aria-label={props["aria-label"] || undefined}>
      <input className="a-hidden" type="checkbox" ref={ref} {...props} />
      <Styled.Icon icon="checkbox" data-checked="false" role="presentation" />
      <Styled.LabelText className="t-copy-sm">{t(label)}</Styled.LabelText>
    </Styled.Label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element | string;
  label: string;
}

export default forwardRef(Checkbox);
