import { useFragment, graphql } from "react-relay";
import orderBy from "lodash/orderBy";
import { SchemaCheckboxGroupFragment$key } from "@/relay/SchemaCheckboxGroupFragment.graphql";
import CheckboxGroup from "../CheckboxGroup";
import Checkbox from "../Checkbox";
import * as Styled from "./SchemaCheckboxGroup.styles";

type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroup>;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

type BaseProps = Omit<CheckboxGroupProps, "label" | "children">;

export default function SchemaCheckboxGroup({ data, name, register }: Props) {
  const { schemaVersions } = useFragment<SchemaCheckboxGroupFragment$key>(
    fragment,
    data,
  );

  const options = orderBy(
    schemaVersions.nodes.filter(({ name }) => !name.includes("Test")),
    ["name"],
  );

  return (
    <Styled.Group
      name={name}
      label="forms.fields.ordering_schemas"
      description="forms.fields.ordering_schemas_description"
    >
      <>
        {options.map(({ name, namespace, identifier }, i) => (
          <Checkbox
            key={i}
            value={JSON.stringify({ namespace, identifier })}
            {...register}
          >
            {name}
          </Checkbox>
        ))}
      </>
    </Styled.Group>
  );
}

interface Props extends BaseProps {
  data: SchemaCheckboxGroupFragment$key;
  name: string;
  register: CheckboxProps;
}

const fragment = graphql`
  fragment SchemaCheckboxGroupFragment on Query {
    schemaVersions {
      nodes {
        name
        namespace
        identifier
      }
    }
  }
`;
