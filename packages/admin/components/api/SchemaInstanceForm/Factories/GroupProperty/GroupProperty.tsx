import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import SchemaProperty from "../SchemaProperty";
import { Fieldset, FormGrid } from "components/forms";
import type { GroupPropertyFragment$key } from "@/relay/GroupPropertyFragment.graphql";

export default function GroupProperty(props: Props) {
  const group = useFragment<GroupPropertyFragment$key>(fragment, props.group);

  // Schema property inputs should be laid out in a grid,
  // same as the global properties
  return group.legend ? (
    <Fieldset label={group.legend}>
      <FormGrid>
        {group.properties.map((prop, index) => (
          <SchemaProperty field={prop} key={index} />
        ))}
      </FormGrid>
    </Fieldset>
  ) : (
    <>
      {group.properties.map((prop, index) => (
        <SchemaProperty field={prop} key={index} />
      ))}
    </>
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
