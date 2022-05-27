import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import type { FieldValues, Control, Path } from "react-hook-form";
import Typeahead from "components/forms/Typeahead";

import type {
  CollectionTypeaheadFragment$data,
  CollectionTypeaheadFragment$key,
} from "__generated__/CollectionTypeaheadFragment.graphql";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const CollectionTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled, required }: Props<T>,
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
      rules={{
        validate: (value) => {
          return (
            !!value ||
            "Please select a collection. If the collection is not listed, you may need to create the collection first."
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
  data?: CollectionTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type CollectionNode =
  CollectionTypeaheadFragment$data["viewer"]["collections"]["nodes"][number];

export default CollectionTypeahead;

// Currently limited to 50 collections per query
const fragment = graphql`
  fragment CollectionTypeaheadFragment on Query {
    viewer {
      collections {
        nodes {
          id
          title
          slug
        }
      }
    }
  }
`;
