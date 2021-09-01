import React from "react";
import { Checkbox } from "components/forms";
import * as Styled from "./Grid.styles";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const GridItem = ({
  children,
  checkboxProps = {},
  actions,
  thumbnail,
}: Props) => {
  return (
    <Styled.Item>
      {checkboxProps && (
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
  checkboxProps?: CheckboxProps;
  thumbnail?: JSX.Element | React.ReactNode;
  actions?: JSX.Element | React.ReactNode;
}

export default GridItem;
