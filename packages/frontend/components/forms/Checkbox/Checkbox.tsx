import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Checkbox.styles";

function Checkbox(
  { label, defaultChecked, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const { t } = useTranslation();

  return (
    <Styled.Label aria-label={props["aria-label"] || undefined}>
      <input
        className="a-hidden"
        type="checkbox"
        ref={ref}
        defaultChecked={defaultChecked}
        {...props}
      />
      <Styled.Icon icon="checkbox" role="presentation" />
      <Styled.LabelText className="t-copy-sm">{t(label)}</Styled.LabelText>
    </Styled.Label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.JSX.Element | string;
  label: string;
}

export default forwardRef(Checkbox);
