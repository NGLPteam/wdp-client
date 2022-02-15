import React from "react";
import type { FieldValues } from "react-hook-form";
import { useUID } from "react-uid";
import isFunction from "lodash/isFunction";
import { useTranslation } from "react-i18next";

import type InputProps from "../inputType";
import * as Styled from "./BaseInputWrapper.styles";
import Errors from "components/forms/Errors";
import BaseInputLabel from "components/forms/BaseInputLabel";

const BaseInputWrapper = <T extends FieldValues = FieldValues>({
  children,
  description,
  hideLabel,
  label,
  labelProps,
  name,
  required,
  isWide,
  role,
}: Props<T>) => {
  const { t } = useTranslation();
  const uid = useUID();
  // Setting the width this way creates a small extra class that's applied for wide wrappers
  // This prevents the Styled.Wrapper CSS from getting duplicated for a single width change
  const css = isWide && {
    "flex-basis": "var(--form-grid-item-width-wide)",
  };

  return (
    <Styled.Wrapper css={css} role={role}>
      <BaseInputLabel htmlFor={uid} hideLabel={hideLabel} {...labelProps}>
        {t(label)}{" "}
        {required && (
          <span className="a-required">
            * <span className="a-hidden">required</span>
          </span>
        )}
      </BaseInputLabel>
      {isFunction(children)
        ? children({ uid })
        : React.cloneElement(children, { id: uid })}
      {description && (
        <Styled.Description>
          {typeof description === "string" ? t(description) : description}
        </Styled.Description>
      )}
      <Errors name={name} />
    </Styled.Wrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Pick<
    InputProps<T>,
    "name" | "description" | "label" | "hideLabel" | "required"
  > {
  children: JSX.Element | (({ uid }: { uid: string }) => React.ReactNode);
  isWide?: boolean;
  labelProps?: typeof HTMLLabelElement;
  role?: string;
}

export default BaseInputWrapper;
