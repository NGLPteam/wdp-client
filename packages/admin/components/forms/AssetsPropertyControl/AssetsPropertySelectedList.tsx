import React, { useCallback, useMemo } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DragUpdate,
} from "react-beautiful-dnd";
import BaseArrayList, { BaseArrayListItem } from "../BaseArrayList";
import { Option, Value } from "./AssetsPropertySelect";

export default function AssetsPropertySelectedList({
  options,
  value,
  onRemove,
  onDragEnd,
}: Props) {
  const selectedValues = useMemo(() => {
    return value.map((v) => {
      const item = options.find((o) => o.value === v);
      return { label: item?.label || v, value: v };
    });
  }, [value, options]);

  const handleRemove = useCallback(
    (index: number) => {
      if (onRemove) onRemove(index);
    },
    [onRemove]
  );

  const handleDragEnd = useCallback(
    ({ destination, source }: DragUpdate) => {
      if (!destination || !source || destination.index === source.index) return;

      onDragEnd(source.index, destination.index);
    },
    [onDragEnd]
  );

  return value ? (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="assetsPropertyDroppable">
        {(provided, snapshot) => (
          <BaseArrayList
            column
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {selectedValues.map((v, i) => (
              <Draggable key={v.value} draggableId={v.value} index={i}>
                {(provided, snapshot) => (
                  <BaseArrayListItem
                    key={v.value}
                    onRemove={() => handleRemove(i)}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    draggableStyles={provided.draggableProps.style}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {v.label}
                  </BaseArrayListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </BaseArrayList>
        )}
      </Droppable>
    </DragDropContext>
  ) : null;
}

interface Props {
  options: Option[];
  value: Value;
  onRemove: (index: number) => void;
  onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
}
