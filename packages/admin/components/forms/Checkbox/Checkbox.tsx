import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Checkbox.styles";

function Checkbox(
  { children, description, label, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const { t } = useTranslation();

  return (
    <div>
      <Styled.Label aria-label={props["aria-label"] || undefined}>
        <input className="a-hidden" type="checkbox" ref={ref} {...props} />
        <Styled.Icon icon="checkbox" data-checked="false" role="presentation" />
        {children && (
          <Styled.LabelText className="t-copy-sm">{children}</Styled.LabelText>
        )}
        {label && (
          <Styled.LabelText className="t-copy-sm">
            {typeof label === "string" ? t(label) : label}
          </Styled.LabelText>
        )}
      </Styled.Label>
      {description && <Styled.Description>{t(description)}</Styled.Description>}
    </div>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.JSX.Element | string;
  label?: string | React.JSX.Element;
  indeterminate?: boolean;
  description?: string;
}

export default forwardRef(Checkbox);
