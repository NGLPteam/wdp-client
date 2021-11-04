import React from "react";
import * as Styled from "./BaseInputError.styles";
import { IconFactory } from "components/factories";

const BaseInputError = ({ message }: Props) => {
  return (
    <Styled.Wrapper>
      <IconFactory icon="warning" title="Error" />
      <p>{message}</p>
    </Styled.Wrapper>
  );
};

interface Props {
  message: string;
}

export default BaseInputError;
