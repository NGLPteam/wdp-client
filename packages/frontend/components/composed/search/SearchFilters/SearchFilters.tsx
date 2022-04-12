import React from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import SearchFilter from "../SearchFilter";
import * as Styled from "./SearchFilters.styles";
import {
  Fieldset,
  Select,
  // TypeaheadController,
} from "components/forms";
import {
  SearchFiltersFragment$data,
  SearchFiltersFragment$key,
} from "@/relay/SearchFiltersFragment.graphql";
import { Button } from "components/atomic";

export default function SearchFilters({ data, id }: Props) {
  const searchData = useFragment<SearchFiltersFragment$key>(fragment, data);

  const { t } = useTranslation();

  const router = useRouter();

  const methods = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      order: router.query.order || "PUBLISHED_ASCENDING",
      ...(router.query.filters && {
        ...JSON.parse(String(router.query.filters)),
      }),
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: Record<string, string>) => {
    const { order, ...filters } = data;
    removeEmptyKeys(filters);

    router.push(
      {
        pathname: router.pathname,
        query: {
          page: router.query.page,
          q: router.query.q,
          order,
          filters: JSON.stringify(filters),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    methods.reset({
      order: "PUBLISHED_ASCENDING",
    });

    router.push(
      {
        pathname: router.pathname,
        query: {
          page: router.query.page,
          q: router.query.q,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Filters id={id} as="form">
          <Fieldset legend={t("sort.results_header")}>
            <Select
              id="sortSearch"
              label={t("sort.label")}
              size="lg"
              block
              hideLabel
              {...methods.register("order")}
            >
              <option disabled>{t("list.order_by_label")}</option>
              <option value="RECENT">Most Recent</option>
              <option value="OLDEST">Oldest</option>
              <option value="PUBLISHED_ASCENDING">
                Publish Date, Ascending
              </option>
              <option value="PUBLISHED_DESCENDING">
                Publish Date, Descending
              </option>
              <option value="TITLE_ASCENDING">Title, A-Z</option>
              <option value="TITLE_DESCENDING">Title, Z-A</option>
              <option value="SCHEMA_NAME_ASCENDING">Schema, Ascending</option>
              <option value="SCHEMA_NAME_DESCENDING">Schema, Descending</option>
            </Select>
          </Fieldset>
          {searchData && (
            <Fieldset legend={t("filter.results_header")}>
              {searchData.coreProperties.map((prop: FilterNode, i: number) => (
                <SearchFilter key={i} data={prop} />
              ))}
            </Fieldset>
          )}
        </Styled.Filters>
        <br />
        <Button type="submit" size="sm">
          Submit
        </Button>
        <Button type="reset" secondary size="sm" onClick={handleReset}>
          Clear Filters
        </Button>
      </form>
    </FormProvider>
  );
}

// const SchemaCheckboxes = (
//   <CheckboxGroup label="Type:">
//     {searchData.schemas.map(({ namespace, identifier, name }: SchemaNode) => (
//       // eslint-disable-next-line react/jsx-no-undef
//       <Checkbox
//         key={`${namespace}:${identifier}`}
//         label={name}
//         value={`${namespace}:${identifier}`}
//         {...register("$core.schema")}
//       />
//     ))}
//   </CheckboxGroup>
// );

interface Props {
  data: SearchFiltersFragment$key;
  /** a11y ID for form compontents */
  id?: string;
}

type FilterNode = SearchFiltersFragment$data["coreProperties"][number];

const fragment = graphql`
  fragment SearchFiltersFragment on SearchScope {
    coreProperties {
      ...SearchFilterFragment
    }
    schemas: availableSchemaVersions {
      identifier
      namespace
      kind
      name
    }
  }
`;
