import { createContext, useContext } from "react";

import type { State } from "./types";

const Context = createContext<State>({
  assets: [],
  contributors: [],
  defaultValues: {},
  fieldValues: {},
});

Context.displayName = "forms.Schema.Context";

export default Context;

export function useSchemaFormContext(): State {
  return useContext(Context);
}
