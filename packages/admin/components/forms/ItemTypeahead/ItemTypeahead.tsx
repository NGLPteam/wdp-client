import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import type { FieldValues, Control, Path } from "react-hook-form";
import Typeahead from "components/forms/Typeahead";

import type {
  ItemTypeaheadFragment$data,
  ItemTypeaheadFragment$key,
} from "__generated__/ItemTypeaheadFragment.graphql";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const ItemTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled, required }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    const options = optionsData?.viewer.items.nodes.map((node: ItemNode) => {
      return {
        label: node.title || "",
        value: node.id,
      };
    });

    return options;
  }, [optionsData]);

  return options ? (
    <Controller<T>
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          return (
            !!value ||
            "Please select an item. If the item is not listed, you may need to add the item first."
          );
        },
      }}
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
          required={required}
          {...field}
        />
      )}
    />
  ) : null;
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  data?: ItemTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type ItemNode = ItemTypeaheadFragment$data["viewer"]["items"]["nodes"][number];

export default ItemTypeahead;

// Currently limited to 50 items per query
const fragment = graphql`
  fragment ItemTypeaheadFragment on Query {
    viewer {
      items {
        nodes {
          id
          title
        }
      }
    }
  }
`;
