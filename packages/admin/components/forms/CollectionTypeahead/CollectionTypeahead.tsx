import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import Typeahead from "components/forms/Typeahead";

import type {
  CollectionTypeaheadFragment$data,
  CollectionTypeaheadFragment$key,
} from "__generated__/CollectionTypeaheadFragment.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const CollectionTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    return optionsData?.viewer.collections.nodes.map((node: CollectionNode) => {
      return {
        label: node.title || "",
        value: node.id,
      };
    });
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
  data?: CollectionTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type CollectionNode = CollectionTypeaheadFragment$data["viewer"]["collections"]["nodes"][number];

export default CollectionTypeahead;

// Currently limited to 50 collections per query
const fragment = graphql`
  fragment CollectionTypeaheadFragment on Query {
    viewer {
      collections {
        nodes {
          id
          title
        }
      }
    }
  }
`;