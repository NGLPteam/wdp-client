import React, { createContext, useContext } from "react";
import { graphql } from "relay-runtime";
import { useRefetchable } from "relay-hooks";
import type { SchemaContextState } from "components/api/hooks/types";
import { useSchemaContext } from "components/api/hooks";
import { SchemaFormFieldsContextFragment$key } from "@/relay/SchemaFormFieldsContextFragment.graphql";
import { SchemaFormFieldsContextRefetchQuery } from "@/relay/SchemaFormFieldsContextRefetchQuery.graphql";

const SchemaFormFieldsContext = createContext<SchemaContextState>({
  assets: [],
  contributors: [],
  defaultValues: {},
  fieldValues: {},
  refetch: null,
});

function SchemaFormFieldsContextProvider({ data, children }: ProviderProps) {
  const {
    data: schema,
    refetch,
    isLoading,
  } = useRefetchable<
    SchemaFormFieldsContextRefetchQuery,
    SchemaFormFieldsContextFragment$key
  >(fragment, data);

  const context = useSchemaContext(schema.context);

  return (
    <SchemaFormFieldsContext.Provider
      value={{ ...context, refetch, isLoading }}
    >
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
