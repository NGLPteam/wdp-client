import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const TableDragDrop = ({ children, onDragEnd }: Props) => {
  const handleDragEnd = useCallback(
    ({ destination, source }) => {
      if (
        !destination ||
        !source ||
        destination.index === source.index ||
        !onDragEnd
      )
        return;
      onDragEnd(source.index, destination.index);
    },
    [onDragEnd]
  );

  return onDragEnd ? (
    <DragDropContext onDragEnd={handleDragEnd}>{children}</DragDropContext>
  ) : (
    <>{children}</>
  );
};

interface Props {
  children: React.ReactNode;
  onDragEnd?: (source: number, destination: number) => void;
}

export default TableDragDrop;
