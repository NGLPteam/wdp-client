import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useController, useFormContext } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "components/forms";
import { SearchSchemaFilterFragment$key } from "@/relay/SearchSchemaFilterFragment.graphql";

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

  // We don't want to render the checkboxes until we have the default value.
  // schemaQuery should always return an array.
  return (
    <CheckboxGroup name="schema" label={t("glossary.schema")}>
      <>
        {schemaData.schemas.map(({ schemaDefinition, name }) => (
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
        ))}
      </>
    </CheckboxGroup>
  );
}

interface Props {
  data: SearchSchemaFilterFragment$key;
}

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
