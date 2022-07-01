import { useState } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useController, useFormContext } from "react-hook-form";
import * as Styled from "./SearchSchemaFilter.styles";
import { Checkbox, CheckboxGroup } from "components/forms";
import { ButtonControl } from "components/atomic";
import {
  SearchSchemaFilterFragment$key,
  SearchSchemaFilterFragment$data,
} from "@/relay/SearchSchemaFilterFragment.graphql";
// import { SearchSchemaFilterSchemaRanksFragment$key } from "@/relay/SearchSchemaFilterSchemaRanksFragment.graphql";

type SearchSchemas = SearchSchemaFilterFragment$data["schemas"];

export default function SearchSchemaFilter({ data }: Props) {
  const { control } = useFormContext();

  const schemaData = useFragment<SearchSchemaFilterFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

  const { field } = useController({
    control,
    name: "schema",
  });

  const initialVisible = schemaData?.schemas?.slice(0, 6);
  const showOnExpand = schemaData?.schemas?.slice(6);

  const [expanded, setExpanded] = useState(false);

  const renderCheckboxes = (schemas: SearchSchemas) =>
    schemas.map(({ schemaDefinition, name }) => (
      <Checkbox
        key={`${schemaDefinition.slug}`}
        onChange={(e) => {
          let valueCopy = field?.value ? [...field.value] : [];

          const { checked, value } = e.target;

          if (checked && !valueCopy.includes(value)) {
            valueCopy.push(value);
          } else {
            valueCopy = valueCopy.filter((v) => v !== value);
          }

          // send data to react hook form
          field.onChange(valueCopy);
        }}
        checked={field.value?.includes(`${schemaDefinition.slug}`)}
        value={`${schemaDefinition.slug}`}
      >
        {name}
      </Checkbox>
    ));

  // We don't want to render the checkboxes until we have the default value.
  // schemaQuery should always return an array.
  return schemaData?.schemas?.length ? (
    <CheckboxGroup name="schema" label={t("glossary.schema")} hideLabel>
      <>
        <Styled.ExpandableWrapper $oneCol={initialVisible.length < 4}>
          {renderCheckboxes(initialVisible)}
        </Styled.ExpandableWrapper>
        {expanded && (
          <Styled.ExpandableWrapper>
            {renderCheckboxes(showOnExpand)}
          </Styled.ExpandableWrapper>
        )}
        {!!showOnExpand?.length && (
          <ButtonControl
            icon="chevron"
            iconRotate={expanded ? 0 : 180}
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
          >
            {expanded ? t("search.show_less") : t("search.show_all_schemas")}
          </ButtonControl>
        )}
      </>
    </CheckboxGroup>
  ) : null;
}

interface Props {
  data: SearchSchemaFilterFragment$key;
}

// // TODO: Scope this query to the search, e.g. collection schemas on the Collection List page

const fragment = graphql`
  fragment SearchSchemaFilterFragment on SearchScope {
    schemas: availableSchemaVersions {
      name
      schemaDefinition {
        slug
      }
    }
  }
`;

// TODO: add priority query to get schema ranks for sorting schemas in scoped queries.
// const schemaRanksFragment = graphql`
//   fragment SearchSchemaFilterSchemaRanksFragment on Entity {
//     schemaRanks {
//       name
//       slug
//       count
//     }
//   }
// `;
