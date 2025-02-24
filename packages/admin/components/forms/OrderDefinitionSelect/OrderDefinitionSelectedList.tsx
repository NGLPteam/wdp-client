import React, { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragUpdate,
} from "react-beautiful-dnd";
import { OrderDefinition } from "types/graphql-schema";
import { IconFactory } from "components/factories";
import capitalize from "lodash/capitalize";
import BaseArrayList from "../BaseArrayList";
import * as Styled from "./OrderDefinitionSelect.styles";

export default function OrderDefinitionSelectedList({
  value,
  options,
  onChange,
}: Props) {
  // Remove item from value and pass to form
  function handleRemove(index: number) {
    const newValue = value.filter((_v, i) => i !== index);
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
    [onChange, value],
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
                    <Styled.OrderListItem
                      key={i}
                      onRemove={() => handleRemove(i)}
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      draggableStyles={provided.draggableProps.style}
                      $invalid={!options.find((o) => o.value === v.path)}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Styled.DirectionButton
                        type="button"
                        onClick={(e) => handleDirection(e, i)}
                      >
                        <span>
                          {capitalize(
                            v.path
                              .replaceAll(".", " - ")
                              .replaceAll("_", " ")
                              .split("#")[0],
                          )}
                        </span>
                        <IconFactory
                          icon="chevron"
                          rotate={v.direction === "ASCENDING" ? 0 : 180}
                          title={v.direction.toLowerCase()}
                        />
                      </Styled.DirectionButton>
                    </Styled.OrderListItem>
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
  value: Omit<OrderDefinition, "nulls">[];
  /** Returns the current value */
  onChange: (value: Omit<OrderDefinition, "nulls">[]) => void;
}
