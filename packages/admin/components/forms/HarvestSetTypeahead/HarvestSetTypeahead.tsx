import { useState } from "react";
import { graphql } from "react-relay";
import { debounce } from "lodash";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import { Controller } from "react-hook-form";
import BaseTypeahead from "components/forms/BaseTypeahead";
import { FormFieldSkeleton } from "components/atomic/loading";
import {
  HarvestSetTypeaheadQuery as Query,
  HarvestSetTypeaheadQuery$data as Response,
} from "@/relay/HarvestSetTypeaheadQuery.graphql";
import * as Styled from "./HarvestSetTypeahead.styles";
import type { FieldValues, Control, Path } from "react-hook-form";

type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;

const HarvestSetTypeahead = <T extends FieldValues = FieldValues>({
  slug,
  name,
  control,
  label,
  disabled,
  required,
}: Props<T>) => {
  const [q, setQ] = useState("");

  const debouncedOnChange = debounce((value) => setQ(value), 300);

  const formatOptions = (data: Response) => {
    const { harvestSets } = data.harvestSource ?? {};

    if (!harvestSets) return [];

    const options = harvestSets.nodes?.map((node) => ({
      node: (
        <div>
          <Styled.Identifier>{node.identifier}</Styled.Identifier>
          <Styled.Name>{node.name}</Styled.Name>
        </div>
      ),
      value: node.id,
      label: node.identifier,
    }));

    return options;
  };

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ q, slug }}
      fallback={<FormFieldSkeleton />}
    >
      {({ data }) => {
        return (
          <Controller<T>
            name={name}
            control={control}
            render={({ field }) => (
              <BaseTypeahead
                label={label}
                options={data ? formatOptions(data) : []}
                onInputChange={debouncedOnChange}
                disabled={disabled}
                required={required}
                defaultValue={q}
                {...field}
              />
            )}
          />
        );
      }}
    </LazyLoadQueryWrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
  slug: string;
}

export default HarvestSetTypeahead;

const query = graphql`
  query HarvestSetTypeaheadQuery($slug: Slug!, $q: String!) {
    harvestSource(slug: $slug) {
      identifier
      harvestSets(filters: { prefix: $q }, page: 1, perPage: 50) {
        nodes {
          id
          identifier
          name
        }
      }
    }
  }
`;
