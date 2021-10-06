import React, { Ref } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import QueryWrapper from "components/api/QueryWrapper";
import Typeahead from "components/forms/Typeahead";

import type { CollectionTypeaheadQuery as Query } from "__generated__/CollectionTypeaheadQuery.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const CollectionTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label, disabled }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  function getOptions(data: Query["response"]) {
    const options = data.viewer.collections.nodes.map(
      (node: CollectionNode) => {
        return {
          label: node.title || "",
          value: node.id,
        };
      }
    );

    return options;
  }

  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <QueryWrapper<Query> query={query}>
          {({ data }) =>
            data?.viewer?.collections?.nodes ? (
              <Typeahead
                label={label}
                options={getOptions(data)}
                disabled={disabled}
                {...field}
              />
            ) : null
          }
        </QueryWrapper>
      )}
    />
  );
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
}

type CollectionNode = Query["response"]["viewer"]["collections"]["nodes"][number];

export default CollectionTypeahead;

// Currently limited to 50 collections per query
const query = graphql`
  query CollectionTypeaheadQuery {
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
