import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import type { GroupPropertyFragment$key } from "@/relay/GroupPropertyFragment.graphql";

import SchemaProperty from "../SchemaProperty";

import { Fieldset, Legend } from "./GroupProperty.styles";

export default function GroupProperty(props: Props) {
  const group = useFragment<GroupPropertyFragment$key>(fragment, props.group);

  return (
    <Fieldset>
      {group.legend && <Legend>{group.legend}</Legend>}
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
