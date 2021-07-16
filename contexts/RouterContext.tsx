import React, { createContext, useReducer } from "react";

const initialState = {
  activeModel: "",
  activeId: "",
  activeView: "",
  activeSubview: "",
};

const RouterContext = createContext<RouterContextInterface | null>(null);

const RouterReducer = (state: RouterState, action: RouterAction) => {
  switch (action.type) {
    case "SET_ACTIVE_ENTITY":
      return {
        ...state,
        activeModel: action.payload,
      };
    case "SET_ACTIVE_ID":
      return {
        ...state,
        activeId: action.payload,
      };
    case "SET_ACTIVE_VIEW":
      return {
        ...state,
        activeView: action.payload,
      };
    case "SET_ACTIVE_SUBVIEW":
      return {
        ...state,
        activeSubview: action.payload,
      };
    default:
      return state;
  }
};

function RouterContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(RouterReducer, initialState);

  return (
    <RouterContext.Provider value={{ state, dispatch }}>
      {children}
    </RouterContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
}

export default RouterContext;

export { RouterContextProvider };

export interface RouterState {
  activeModel: string | undefined;
  activeId: string | undefined;
  activeView: string | undefined;
  activeSubview: string | undefined;
}

export interface RouterContextInterface {
  state: RouterState;
  dispatch: React.Dispatch<RouterAction>;
}

export interface RouterAction {
  type: string;
  payload: string | undefined;
}
