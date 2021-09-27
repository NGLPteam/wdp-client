import { IconFactory } from "components/factories";
import React from "react";
import * as Styled from "./BaseArrayList.styles";

const BaseArrayListItem = ({ children, onRemove, ...itemProps }: Props) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <Styled.Item {...itemProps}>
      <Styled.Text>{children}</Styled.Text>
      <Styled.Button type="button" onClick={handleRemove}>
        <IconFactory icon="close" />
      </Styled.Button>
    </Styled.Item>
  );
};

interface Props {
  children: React.ReactNode;
  onRemove: () => void;
}

export default BaseArrayListItem;
