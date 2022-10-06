import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useUID } from "react-uid";
import * as Styled from "./Table.styles";

const TableRow = ({ children, withDragDrop, index, ...rowProps }: RowProps) => {
  const uid = useUID();

  return withDragDrop ? (
    <Draggable key={uid} draggableId={`drag${uid}`} index={index}>
      {(provided, snapshot) => (
        <Styled.Row
          role="row"
          {...rowProps}
          ref={provided.innerRef}
          data-is-dragging={snapshot.isDragging}
          data-draggable-styles={provided.draggableProps.style}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </Styled.Row>
      )}
    </Draggable>
  ) : (
    <Styled.Row role="row" {...rowProps}>
      {children}
    </Styled.Row>
  );
};

interface RowProps {
  children: React.ReactNode | React.ReactNode[] | Element | Element[];
  withDragDrop?: boolean;
  index: number;
}

export default TableRow;
