import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  activeEntity: "",
  activeId: "",
  activeView: "",
  error: null,
};

const GlobalDataContext = createContext(null);

function GlobalDataProvider({ children }) {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalDataContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalDataContext;

export { GlobalDataProvider };
