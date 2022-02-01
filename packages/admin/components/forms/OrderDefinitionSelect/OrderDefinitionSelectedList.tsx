import React from "react";
import BaseArrayList from "../BaseArrayList";
import { OrderDefinition } from "types/graphql-schema";

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

  return (
    <BaseArrayList column>
      {value &&
        value.map((v, i) => (
          <BaseArrayList.Item key={i} onRemove={() => handleRemove(i)}>
            <button type="button" onClick={(e) => handleDirection(e, i)}>
              {`${options.find((o) => o.value === v.path)?.label || v.path}, `}
              <span className="t-capitalize">{v.direction.toLowerCase()}</span>
            </button>
          </BaseArrayList.Item>
        ))}
    </BaseArrayList>
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
