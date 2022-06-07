import BaseInputWrapper from "../BaseInputWrapper";
import Controller from "./Controller";
import * as Styled from "./EntitySelectorUI.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;
type ControllerProps = React.ComponentProps<typeof Controller>;

interface Props extends Omit<BaseProps, "children">, ControllerProps {
  height?: string;
}

function EntitySelectorUI({ height = "400px", ...props }: Props) {
  return (
    <BaseInputWrapper role="group" {...props}>
      <Styled.Wrapper $height={height}>
        <Controller {...props} />
      </Styled.Wrapper>
    </BaseInputWrapper>
  );
}

export default EntitySelectorUI;
