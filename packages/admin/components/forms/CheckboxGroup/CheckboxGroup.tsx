import { PropsWithChildren } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CheckboxGroup.styles";

type BaseProps = Omit<
  React.ComponentProps<typeof BaseInputWrapper>,
  "children"
>;

function CheckboxGroup({ children, ...props }: BaseProps & PropsWithChildren) {
  return (
    <BaseInputWrapper role="group" descriptionTop {...props}>
      <Styled.CheckboxesWrapper>{children}</Styled.CheckboxesWrapper>
    </BaseInputWrapper>
  );
}

export default CheckboxGroup;
