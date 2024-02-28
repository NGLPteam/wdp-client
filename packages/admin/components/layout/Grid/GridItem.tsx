import { Checkbox } from "components/forms";
import * as Styled from "./Grid.styles";

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
  children: React.JSX.Element;
  selectable?: boolean;
  checkboxProps?: CheckboxProps;
  thumbnail?: React.JSX.Element | React.ReactNode;
  actions?: React.JSX.Element | React.ReactNode;
}

export default GridItem;
