import React, { createContext, useContext } from "react";
import { graphql, useFragment } from "react-relay";
import type { SchemaContextState } from "components/api/hooks/types";
import { useSchemaContext } from "components/api/hooks";
import { SchemaFormFieldsContextFragment$key } from "@/relay/SchemaFormFieldsContextFragment.graphql";

const SchemaFormFieldsContext = createContext<SchemaContextState>({
  assets: [],
  contributors: [],
  defaultValues: {},
  fieldValues: {},
});

function SchemaFormFieldsContextProvider({ data, children }: ProviderProps) {
  const schema = useFragment(fragment, data);

  const context = useSchemaContext(schema.context);

  return (
    <SchemaFormFieldsContext.Provider value={context}>
      {children}
    </SchemaFormFieldsContext.Provider>
  );
}

interface ProviderProps {
  data: SchemaFormFieldsContextFragment$key;
  children: React.ReactNode;
}

export default SchemaFormFieldsContext;

export { SchemaFormFieldsContextProvider };

export function useSchemaFormFieldsContext(): SchemaContextState {
  return useContext(SchemaFormFieldsContext);
}

const fragment = graphql`
  fragment SchemaFormFieldsContextFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }
  }
`;
