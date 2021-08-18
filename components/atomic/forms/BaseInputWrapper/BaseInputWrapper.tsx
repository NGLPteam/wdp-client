import React from "react";
import { useUID } from "react-uid";
import isFunction from "lodash/isFunction";
import * as Styled from "./BaseInputWrapper.styles";
import type InputProps from "../inputType";
import { IconFactory } from "components/factories";

const BaseInputWrapper = ({
  children,
  error,
  description,
  label,
  hideLabel,
  labelProps,
}: Props) => {
  const uid = useUID();

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={uid} hideLabel={hideLabel} {...labelProps}>
        {label}
      </Styled.Label>
      {isFunction(children)
        ? children({ uid })
        : React.cloneElement(children, { id: uid })}
      {description && <Styled.Description>{description}</Styled.Description>}
      {error && (
        <Styled.Error>
          <IconFactory icon="warning" title="Error" />
          <p>{error.message}</p>
        </Styled.Error>
      )}
    </Styled.Wrapper>
  );
};

interface Props
  extends Pick<InputProps, "error" | "description" | "label" | "hideLabel"> {
  children: JSX.Element | (({ uid }: { uid: string }) => React.ReactNode);
  labelProps?: typeof HTMLLabelElement;
}

export default BaseInputWrapper;
