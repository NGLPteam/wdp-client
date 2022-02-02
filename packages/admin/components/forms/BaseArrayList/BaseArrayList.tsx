import React, { forwardRef, Ref } from "react";
import * as Styled from "./BaseArrayList.styles";
import BaseArrayListItem from "./BaseArrayListItem";

const BaseArrayList = (
  { children, column, isDraggingOver, ...props }: Props,
  ref: Ref<HTMLUListElement>
) => {
  return (
    <Styled.List
      ref={ref}
      $column={column}
      {...props}
      $isDraggingOver={isDraggingOver}
    >
      {children}
    </Styled.List>
  );
};

interface Props {
  children: React.ReactNode;
  column?: true;
  isDraggingOver?: boolean;
}

BaseArrayList.Item = BaseArrayListItem;

export default forwardRef(BaseArrayList);
