import React from "react";
import type { FieldValues } from "react-hook-form";
import { useUID } from "react-uid";
import isFunction from "lodash/isFunction";
import * as Styled from "./BaseInputWrapper.styles";
import type InputProps from "../inputType";
import { useTranslation } from "react-i18next";

import Errors from "components/forms/Errors";

const BaseInputWrapper = <T extends FieldValues = FieldValues>({
  children,
  description,
  hideLabel,
  label,
  labelProps,
  name,
  required,
}: Props<T>) => {
  const { t } = useTranslation();
  const uid = useUID();

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={uid} hideLabel={hideLabel} {...labelProps}>
        {t(label)}{" "}
        {required && (
          <span className="a-required">
            * <span className="a-hidden">required</span>
          </span>
        )}
      </Styled.Label>
      {isFunction(children)
        ? children({ uid })
        : React.cloneElement(children, { id: uid })}
      {description && <Styled.Description>{description}</Styled.Description>}
      <Errors name={name} label={t(label)} />
    </Styled.Wrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Pick<
    InputProps<T>,
    "name" | "description" | "label" | "hideLabel" | "required"
  > {
  children: JSX.Element | (({ uid }: { uid: string }) => React.ReactNode);

  labelProps?: typeof HTMLLabelElement;
}

export default BaseInputWrapper;
