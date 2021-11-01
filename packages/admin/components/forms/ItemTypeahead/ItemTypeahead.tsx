import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import Typeahead from "components/forms/Typeahead";

import type {
  ItemTypeaheadFragment$data,
  ItemTypeaheadFragment$key,
} from "__generated__/ItemTypeaheadFragment.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const ItemTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled }: Props<T>,
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
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
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
