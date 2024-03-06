import React, { createContext, useContext } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { useSchemaContext } from "components/api/hooks";
import { SchemaFormFieldsContextFragment$key } from "@/relay/SchemaFormFieldsContextFragment.graphql";
import { SchemaFormFieldsContextRefetchQuery } from "@/relay/SchemaFormFieldsContextRefetchQuery.graphql";
import type { SchemaContextState } from "components/api/hooks/types";

const SchemaFormFieldsContext = createContext<SchemaContextState>({
  assets: [],
  contributors: [],
  defaultValues: {},
  fieldValues: {},
  refetch: null,
});

function SchemaFormFieldsContextProvider({ data, children }: ProviderProps) {
  const [schema, refetch] = useRefetchableFragment<
    SchemaFormFieldsContextRefetchQuery,
    SchemaFormFieldsContextFragment$key
  >(fragment, data);

  const context = useSchemaContext(schema.context);

  return (
    <SchemaFormFieldsContext.Provider value={{ ...context, refetch }}>
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
  fragment SchemaFormFieldsContextFragment on SchemaInstance
  @refetchable(queryName: "SchemaFormFieldsContextRefetchQuery") {
    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }
  }
`;
