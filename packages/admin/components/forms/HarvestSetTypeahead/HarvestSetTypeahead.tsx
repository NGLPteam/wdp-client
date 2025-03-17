import { useState, useEffect } from "react";
import { fetchQuery, graphql } from "relay-runtime";
import { debounce } from "lodash";
import { Controller } from "react-hook-form";
import BaseTypeahead from "components/forms/BaseTypeahead";
import { default as getRelayEnvironment } from "@wdp/lib/app/buildEnvironment";
import {
  HarvestSetTypeaheadQuery as Query,
  HarvestSetTypeaheadQuery$data as Response,
} from "@/relay/HarvestSetTypeaheadQuery.graphql";
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
  const [data, setData] = useState<Response | undefined>();

  const debouncedOnChange = debounce((value) => setQ(value), 300);

  const formatOptions = (data: Response) => {
    const { harvestSets } = data.harvestSource ?? {};

    if (!harvestSets) return [];

    const options = harvestSets.nodes?.map((node) => ({
      node: (
        <div>
          <span>{node.identifier}</span>
          <span style={{ display: "block" }}>{node.name}</span>
        </div>
      ),
      value: node.id,
      label: node.identifier,
    }));

    return options;
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const env = getRelayEnvironment();

      let data;

      try {
        data = await fetchQuery<Query>(
          env,
          query,
          { slug },
          {
            networkCacheConfig: { force: false },
          },
        )
          .toPromise()
          .then((result) => {
            return result;
          });
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
      }

      setData(data);
    };

    fetchOptions();
  }, [q, slug]);

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
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
  slug: string;
}

export default HarvestSetTypeahead;

const query = graphql`
  query HarvestSetTypeaheadQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      identifier
      harvestSets {
        nodes {
          id
          identifier
          name
        }
      }
    }
  }
`;
