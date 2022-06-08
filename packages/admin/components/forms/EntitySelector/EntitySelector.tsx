import BaseInputWrapper from "../BaseInputWrapper";
import Controller from "./EntitySelectorController";
import * as Styled from "./EntitySelector.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;
type ControllerProps = React.ComponentProps<typeof Controller>;

interface Props extends Omit<BaseProps, "children">, ControllerProps {
  height?: string;
}

function EntitySelector({ height = "500px", ...props }: Props) {
  return (
    <BaseInputWrapper role="group" {...props}>
      <Styled.Wrapper $height={height}>
        <Controller {...props} />
      </Styled.Wrapper>
    </BaseInputWrapper>
  );
}

export default EntitySelector;
