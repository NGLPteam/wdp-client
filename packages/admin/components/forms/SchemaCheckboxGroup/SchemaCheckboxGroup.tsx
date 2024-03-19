import { useFragment, graphql } from "react-relay";
import { SchemaCheckboxGroupFragment$key } from "@/relay/SchemaCheckboxGroupFragment.graphql";
import CheckboxGroup from "../CheckboxGroup";
import Checkbox from "../Checkbox";

type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroup>;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

type BaseProps = Omit<CheckboxGroupProps, "label" | "children">;

export default function SchemaCheckboxGroup({ data, name, register }: Props) {
  const entity = useFragment<SchemaCheckboxGroupFragment$key>(fragment, data);

  return entity.schemaRanks.length > 0 ? (
    <CheckboxGroup
      name={name}
      label="forms.fields.ordering_schemas"
      description="forms.fields.ordering_schemas_description"
    >
      <>
        {entity.schemaRanks.map(({ name, namespace, identifier }, i) => (
          <Checkbox
            key={i}
            value={JSON.stringify({ namespace, identifier })}
            {...register}
          >
            {name}
          </Checkbox>
        ))}
      </>
    </CheckboxGroup>
  ) : null;
}

interface Props extends BaseProps {
  data: SchemaCheckboxGroupFragment$key;
  name: string;
  register: CheckboxProps;
}

const fragment = graphql`
  fragment SchemaCheckboxGroupFragment on Entity {
    schemaRanks {
      name
      namespace
      identifier
    }
  }
`;
