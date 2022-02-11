import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./SearchLayout.styles";
import {
  CheckboxGroup,
  Fieldset,
  Select,
  Typeahead,
  Checkbox,
} from "components/forms";
import { SearchLayoutFiltersFragment$key } from "@/relay/SearchLayoutFiltersFragment.graphql";

export default function SearchLayoutFilters({ data }: Props) {
  const entity = useMaybeFragment<SearchLayoutFiltersFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

  return (
    <Styled.Filters>
      <Fieldset legend={t("sort.results_header")}>
        <Select
          id="sortSearch"
          label={t("sort.label")}
          size="lg"
          block
          hideLabel
        >
          <option value="RECENT">{t("sort.most_recent")}</option>
        </Select>
      </Fieldset>
      <Fieldset legend={t("filter.results_header")}>
        {entity && (
          <CheckboxGroup label="Type:">
            {entity.schemaRanks.map((schema, i) => (
              // eslint-disable-next-line react/jsx-no-undef
              <Checkbox key={i} label={schema.name} />
            ))}
          </CheckboxGroup>
        )}
        <Typeahead
          label="Contributor:"
          placeholder="Find a contributor..."
          id="contributorFilter"
          options={[]}
        />
        <Typeahead
          label="Year:"
          placeholder="Select a year..."
          id="yearFilter"
          options={[]}
        />
      </Fieldset>
    </Styled.Filters>
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
