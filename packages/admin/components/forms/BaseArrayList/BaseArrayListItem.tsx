import React, { forwardRef, Ref } from "react";
import { Portal } from "reakit/Portal";
import { useIsMounted } from "@wdp/lib/hooks";
import { IconFactory } from "components/factories";
import * as Styled from "./BaseArrayList.styles";

const BaseArrayListItem = forwardRef(
  (
    { children, onRemove, isDragging, draggableStyles, ...props }: Props,
    ref: Ref<HTMLLIElement>,
  ) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onRemove) onRemove();
    };

    const isMounted = useIsMounted();

    const Item = (
      <Styled.Item
        ref={ref}
        $isDragging={isDragging}
        style={draggableStyles}
        {...props}
      >
        {draggableStyles && <Styled.GrabHandleIcon icon="grabHandle" />}
        <Styled.Text>{children}</Styled.Text>
        <Styled.Button type="button" onClick={handleRemove}>
          <IconFactory icon="close" />
        </Styled.Button>
      </Styled.Item>
    );

    if (isDragging && isMounted) {
      return <Portal>{Item}</Portal>;
    }

    return Item;
  },
);

interface Props {
  children: React.ReactNode;
  onRemove: () => void;
  isDragging?: boolean;
  draggableStyles?: React.CSSProperties;
  className?: string;
}

export default BaseArrayListItem;
