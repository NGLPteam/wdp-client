import React, { Ref } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import QueryWrapper from "components/api/QueryWrapper";
import Typeahead from "components/forms/Typeahead";

import type { ItemTypeaheadQuery as Query } from "__generated__/ItemTypeaheadQuery.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const ItemTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label, disabled }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  function getOptions(data: Query["response"]) {
    const options = data.viewer.items.nodes.map((node: ItemNode) => {
      return {
        label: node.title || "",
        value: node.id,
      };
    });

    return options;
  }

  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <QueryWrapper<Query> query={query}>
          {({ data }) =>
            data?.viewer?.items?.nodes ? (
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

type ItemNode = Query["response"]["viewer"]["items"]["nodes"][number];

export default ItemTypeahead;

// Currently limited to 50 items per query
const query = graphql`
  query ItemTypeaheadQuery {
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
