import * as Styled from "./Grid.styles";
import { Checkbox } from "components/forms";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const GridItem = ({
  children,
  selectable,
  checkboxProps,
  actions,
  thumbnail,
}: Props) => {
  return (
    <Styled.Item data-has-checkbox={selectable}>
      {selectable && (
        <Styled.Checkbox>
          <Checkbox {...checkboxProps} />
        </Styled.Checkbox>
      )}
      {actions && <Styled.Actions>{actions}</Styled.Actions>}
      {thumbnail && <Styled.Thumbnail>{thumbnail}</Styled.Thumbnail>}
      <Styled.Children>{children}</Styled.Children>
    </Styled.Item>
  );
};

interface Props {
  children: JSX.Element;
  selectable?: boolean;
  checkboxProps?: CheckboxProps;
  thumbnail?: JSX.Element | React.ReactNode;
  actions?: JSX.Element | React.ReactNode;
}

export default GridItem;
