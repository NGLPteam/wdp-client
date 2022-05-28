import * as Styled from "./Alert.styles";
import { IconFactory } from "components/factories";

type Props = {
  color?: "red" | "blue" | "green";
  message: string;
  icon?: boolean;
  badge?: boolean;
};

export default function Alert({ color = "red", message, icon, badge }: Props) {
  return (
    <Styled.Wrapper color={color} badge={badge}>
      {icon && <IconFactory icon="alertTriangle24" role="presentation" />}
      <span className="t-copy">{message}</span>
    </Styled.Wrapper>
  );
}
