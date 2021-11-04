import React, { forwardRef, Ref } from "react";
import * as Styled from "./BaseArrayList.styles";
import { IconFactory } from "components/factories";

const BaseArrayListItem = forwardRef(
  ({ children, onRemove, ...itemProps }: Props, ref: Ref<HTMLLIElement>) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onRemove) onRemove();
    };

    return (
      <Styled.Item {...itemProps} ref={ref}>
        <Styled.Text>{children}</Styled.Text>
        <Styled.Button type="button" onClick={handleRemove}>
          <IconFactory icon="close" />
        </Styled.Button>
      </Styled.Item>
    );
  }
);

interface Props {
  children: React.ReactNode;
  onRemove: () => void;
}

export default BaseArrayListItem;
