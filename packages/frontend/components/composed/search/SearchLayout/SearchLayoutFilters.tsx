import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useForm, FormProvider } from "react-hook-form";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./SearchLayout.styles";
import {
  CheckboxGroup,
  Fieldset,
  Select,
  Checkbox,
  TypeaheadController,
} from "components/forms";
import { SearchLayoutFiltersFragment$key } from "@/relay/SearchLayoutFiltersFragment.graphql";

export default function SearchLayoutFilters({ data }: Props) {
  const entity = useMaybeFragment<SearchLayoutFiltersFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

  const methods = useForm({
    shouldUseNativeValidation: true,
  });

  const { register, watch } = methods;

  const watcher = watch();
  console.info("watcher", watcher);

  return (
    <FormProvider {...methods}>
      <Styled.Filters as="form">
        <Fieldset legend={t("sort.results_header")}>
          <Select
            id="sortSearch"
            label={t("sort.label")}
            size="lg"
            block
            hideLabel
            {...register("sort")}
          >
            <option value="RECENT">{t("sort.most_recent")}</option>
            <option value="TARGET_TITLE_ASCENDING">
              {t("sort.title_asc")}
            </option>
          </Select>
        </Fieldset>
        <Fieldset legend={t("filter.results_header")}>
          {entity && (
            <CheckboxGroup label="Type:">
              {entity.schemaRanks.map((schema, i) => (
                // eslint-disable-next-line react/jsx-no-undef
                <Checkbox
                  key={i}
                  label={schema.name}
                  value={`${schema.namespace}:${schema.identifier}`}
                  {...register("schema")}
                />
              ))}
            </CheckboxGroup>
          )}
          <TypeaheadController
            name="contributor"
            label="Contributor:"
            placeholder="Find a contributor..."
            id="contributorFilter"
            options={[{ label: "Contributor A", value: "Contributor-A" }]}
          />
          <TypeaheadController
            name="year"
            label="Year:"
            placeholder="Select a year..."
            id="yearFilter"
            options={[{ label: "2022", value: "2022" }]}
          />
        </Fieldset>
      </Styled.Filters>
    </FormProvider>
  );
}

interface Props {
  data?: SearchLayoutFiltersFragment$key | null;
}

const fragment = graphql`
  fragment SearchLayoutFiltersFragment on Entity {
    schemaRanks {
      identifier
      namespace
      kind
      name
    }
  }
`;
