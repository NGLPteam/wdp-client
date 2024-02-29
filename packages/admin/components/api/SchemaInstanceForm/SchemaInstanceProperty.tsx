import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { SchemaInstancePropertyFragment$key } from "@/relay/SchemaInstancePropertyFragment.graphql";
import * as Factories from "./Factories";

/**
 * A component that renders either a single property or a group of properties
 * at the top level of a schema instance form.
 */
export default function SchemaInstanceProperty(props: Props) {
  const property = useFragment(fragment, props.property);

  if (property.__typename === "GroupProperty") {
    return <Factories.Group group={property} />;
  } else {
    return <Factories.Single field={property} />;
  }
}

interface Props {
  property: SchemaInstancePropertyFragment$key;
}

const fragment = graphql`
  fragment SchemaInstancePropertyFragment on AnySchemaProperty {
    __typename

    ... on GroupProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...GroupPropertyFragment
    }

    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...SchemaPropertyFragment
  }
`;
