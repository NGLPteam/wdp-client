import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Fieldset } from "components/forms";
import SchemaProperty from "../SchemaProperty";

import type { GroupPropertyFragment$key } from "@/relay/GroupPropertyFragment.graphql";

export default function GroupProperty(props: Props) {
  const group = useFragment<GroupPropertyFragment$key>(fragment, props.group);

  return (
    <Fieldset label={group.legend || ""}>
      {group.properties.map((prop, index) => (
        <SchemaProperty field={prop} key={index} />
      ))}
    </Fieldset>
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
