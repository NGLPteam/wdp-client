import React, { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragUpdate,
} from "react-beautiful-dnd";
import BaseArrayList, { BaseArrayListItem } from "../BaseArrayList";
import * as Styled from "./OrderDefinitionSelect.styles";
import { OrderDefinition } from "types/graphql-schema";
import { IconFactory } from "components/factories";

export default function OrderDefinitionSelectedList({
  value,
  options,
  onChange,
}: Props) {
  // Remove item from value and pass to form
  function handleRemove(index: number) {
    const newValue = value.filter((v, i) => i !== index);
    onChange(newValue);
  }

  // Change asc/desc direction and pass value to form
  function handleDirection(e: React.MouseEvent, index: number) {
    e.preventDefault();
    const newValue = value.map((v, i) => {
      if (i === index) {
        return {
          ...v,
          direction:
            v.direction === "ASCENDING"
              ? "DESCENDING"
              : ("ASCENDING" as OrderDefinition["direction"]),
        };
      }
      return v;
    });

    onChange(newValue);
  }

  const handleDragEnd = useCallback(
    ({ destination, source }: DragUpdate) => {
      if (!destination || !source || destination.index === source.index) return;

      const newValue = [...value];
      const sourceItem = newValue.splice(source.index, 1)[0];

      newValue.splice(destination.index, 0, sourceItem);
      onChange(newValue);
    },
    [onChange, value]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <BaseArrayList
            column
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {value &&
              value.map((v, i) => (
                <Draggable
                  key={`${v.path}-${i}`}
                  draggableId={`${v.path}-${i}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <BaseArrayListItem
                      key={i}
                      onRemove={() => handleRemove(i)}
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      draggableStyles={provided.draggableProps.style}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Styled.DirectionButton
                        type="button"
                        onClick={(e) => handleDirection(e, i)}
                      >
                        <span>
                          {options.find((o) => o.value === v.path)?.label ||
                            v.path}
                        </span>
                        <IconFactory
                          icon="chevron"
                          rotate={v.direction === "ASCENDING" ? 0 : 180}
                          title={v.direction.toLowerCase()}
                        />
                      </Styled.DirectionButton>
                    </BaseArrayListItem>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </BaseArrayList>
        )}
      </Droppable>
    </DragDropContext>
  );
}

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  value: OrderDefinition[];
  /** Returns the current value */
  onChange: (value: OrderDefinition[]) => void;
}
