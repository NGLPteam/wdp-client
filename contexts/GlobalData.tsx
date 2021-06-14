import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
    activeEntity: "",
    activeId: "",
    activeView: "",
};

const GlobalDataContext = createContext<GlobalContextInterface | null>(null);

function GlobalDataProvider({ children }: Props) {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    return <GlobalDataContext.Provider value={{ state, dispatch }}>{children}</GlobalDataContext.Provider>;
}

interface Props {
    children: React.ReactNode;
}

export default GlobalDataContext;

export { GlobalDataProvider };
