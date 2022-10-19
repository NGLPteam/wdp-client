import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CheckboxGroup.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;

function CheckboxGroup({ children, ...props }: BaseProps) {
  return (
    <BaseInputWrapper role="group" descriptionTop {...props}>
      <Styled.CheckboxesWrapper>{children}</Styled.CheckboxesWrapper>
    </BaseInputWrapper>
  );
}

export default CheckboxGroup;
