import { IconFactory } from "components/factories";
import * as Styled from "./BaseInputError.styles";

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
