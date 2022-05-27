import { IconFactory } from "components/factories";
import * as Styled from "./Alert.styles";

type Props = {
  color?: "red" | "blue" | "green";
  message: string;
  icon?: boolean;
};

export default function Alert({ color, message, icon }: Props) {
  return (
    <Styled.Wrapper color={color}>
      {icon && <IconFactory icon="alertTriangle24" role="presentation" />}
      <span className="t-copy">{message}</span>
    </Styled.Wrapper>
  );
}
