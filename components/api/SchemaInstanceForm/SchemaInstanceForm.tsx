import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";

import { SchemaInstanceFormFragment$key } from "@/relay/SchemaInstanceFormFragment.graphql";
import { ContentHeader } from "components/layout";
import FormGrid from "components/forms/FormGrid";

import Property from "./SchemaInstanceProperty";
import Provider from "./SchemaInstanceProvider";

import type { OnSuccessCallback } from "./types";

export default function SchemaInstanceForm(props: Props) {
  const instance = useFragment(fragment, props.instance);

  return (
    <Provider context={instance.context} onSuccess={props.onSuccess}>
      <ContentHeader headerStyle="secondary" title="Schema Properties" />
      <FormGrid>
        {instance.properties.map((prop, index) => (
          <Property property={prop} key={index} />
        ))}
      </FormGrid>
    </Provider>
  );
}

interface Props {
  instance: SchemaInstanceFormFragment$key;
  onSuccess?: OnSuccessCallback;
}

const fragment = graphql`
  fragment SchemaInstanceFormFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...SchemaInstanceProviderFragment
    }

    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }
  }
`;
