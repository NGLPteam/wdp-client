import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./EntitySelectorUI.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;

interface Props extends BaseProps {
  parent?: string;
  onParentClick: () => void;
}

function EntitySelectorUI({
  children,
  parent,
  onParentClick,
  ...props
}: Props) {
  return (
    <BaseInputWrapper role="group" {...props}>
      <Styled.Wrapper>
        {parent && (
          <Styled.Back onClick={onParentClick}>
            <Styled.Arrow icon="arrow" role="presentation" />
            {parent}
          </Styled.Back>
        )}
        {children}
      </Styled.Wrapper>
    </BaseInputWrapper>
  );
}

export default EntitySelectorUI;
