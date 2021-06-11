import { useContext, useEffect } from "react";
import GlobalDataContext from "contexts/GlobalData";
import useGetQueryParam from "hooks/useGetQueryParam";

/**
 * These hooks are helpers to access the global data context
 *
 * @param dataPoint - optional, otherwise whole data returned
 * @returns the value of the point, or the full data if not
 */
export const useGlobalData = (dataPoint?: string) => {
    const { state, dispatch } = useContext(GlobalDataContext);
    if (dataPoint && state[dataPoint]) {
        return state[dataPoint];
    } else {
        // return the whole thing
        return { state, dispatch };
    }
};

/** Here are some simplified getters/setters */
/**
 * @sets the value of the active entity to the store
 * @returns entity
 */
export const useSetActiveEntity = () => {
    const { dispatch } = useContext(GlobalDataContext);
    const entity = useGetQueryParam("entity") || "";

    useEffect(() => {
        dispatch({ type: "SET_ACTIVE_ENTITY", payload: entity });
    }, [entity]);

    return entity;
};

/**
 * @return the value of the active entity
 */
export const useGetActiveEntity = () => {
    const { state } = useContext(GlobalDataContext);
    return state.activeEntity;
};

/**
 * @sets the value of the active entity to the store
 * @returns entity
 */
export const useSetActiveId = () => {
    const { dispatch } = useContext(GlobalDataContext);
    const id = useGetQueryParam("id") || "";

    useEffect(() => {
        dispatch({ type: "SET_ACTIVE_ID", payload: id });
    }, [id]);

    return id;
};

/**
 * @return the value of the active entity
 */
export const useGetActiveId = () => {
    const { state } = useContext(GlobalDataContext);
    return state.activeId;
};

/**
 * @sets the value of the active entity to the store
 * @returns entity
 */
export const useSetActiveView = () => {
    const { dispatch } = useContext(GlobalDataContext);
    const view = useGetQueryParam("view") || "main";

    useEffect(() => {
        dispatch({ type: "SET_ACTIVE_VIEW", payload: view });
    }, [view]);

    return view;
};

/**
 * @return the value of the active entity
 */
export const useGetActiveView = () => {
    const { state } = useContext(GlobalDataContext);
    return state.activeView;
};
