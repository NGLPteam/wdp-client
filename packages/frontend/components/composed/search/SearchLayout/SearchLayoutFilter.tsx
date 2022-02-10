import React from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { CheckboxGroup, Checkbox, Typeahead, Fieldset } from "components/forms";
import { SearchLayoutFilterFragment$key } from "@/relay/SearchLayoutFilterFragment.graphql";

export default function SearchLayoutFilter({ data }: Props) {
  const { t } = useTranslation();

  const entity = useFragment<SearchLayoutFilterFragment$key>(fragment, data);

  return (
    <Fieldset legend={t("filter.results_header")}>
      <CheckboxGroup label="Type:">
        {entity.schemaRanks.map((schema, i) => (
          <Checkbox key={i} label={schema.name} />
        ))}
      </CheckboxGroup>
      <Typeahead label="Contributor:" id="contributorFilter">
        <option>Find a contributor...</option>
      </Typeahead>
      <Typeahead id="yearFilter" label="Year:">
        <option>Select a year...</option>
      </Typeahead>
    </Fieldset>
  );
}

interface Props {
  data: SearchLayoutFilterFragment$key;
}

const fragment = graphql`
  fragment SearchLayoutFilterFragment on Entity {
    schemaRanks {
      identifier
      namespace
      kind
      name
    }
  }
`;
