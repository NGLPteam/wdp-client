import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { FieldsetSection, FormGrid } from "components/forms";
import type { GroupPropertyFragment$key } from "@/relay/GroupPropertyFragment.graphql";
import SchemaProperty from "../SchemaProperty";

export default function GroupProperty(props: Props) {
  const group = useFragment<GroupPropertyFragment$key>(fragment, props.group);
  const { t } = useTranslation();

  // Schema property inputs should be laid out in a grid,
  // same as the global properties
  return group.legend ? (
    <FieldsetSection label={group.legend}>
      <FormGrid>
        {group.properties.map((prop, index) => (
          <SchemaProperty field={prop} key={index} />
        ))}
      </FormGrid>
    </FieldsetSection>
  ) : (
    <FieldsetSection label={t("forms.fields.fields")}>
      <FormGrid>
        {group.properties.map((prop, index) => (
          <SchemaProperty field={prop} key={index} />
        ))}
      </FormGrid>
    </FieldsetSection>
  );
}

interface Props {
  group: GroupPropertyFragment$key;
}

const fragment = graphql`
  fragment GroupPropertyFragment on GroupProperty {
    legend
    path
    properties {
      ...SchemaPropertyFragment
    }
  }
`;
