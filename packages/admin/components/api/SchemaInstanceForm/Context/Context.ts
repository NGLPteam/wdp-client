import { createContext, useContext } from "react";
import { SchemaContextState } from "components/api/hooks/types";

const Context = createContext<SchemaContextState>({
  assets: [],
  contributors: [],
  defaultValues: {},
  fieldValues: {},
  refetch: undefined,
});

Context.displayName = "forms.Schema.Context";

export default Context;

export function useSchemaFormContext(): SchemaContextState {
  return useContext(Context);
}
