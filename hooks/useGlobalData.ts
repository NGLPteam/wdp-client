import { useContext, useEffect } from "react";
import GlobalDataContext from "contexts/GlobalData";
import useGetQueryParam from "hooks/useGetQueryParam";
import useGetQuery from "hooks/useGetQuery";

/**
 * These hooks are helpers to access the global data context
 *
 * @param dataPoint - optional, otherwise whole data returned
 * @returns the value of the point, or the full data if not
 */
export const useGlobalData = (): GlobalState => {
  const { state } = useContext(GlobalDataContext) as GlobalContextInterface;
  return state;
};

/**
 * @param dataPoint
 * @returns the value of the point
 */
export const useGlobalDataPoint = (dataPoint: string): string => {
  const { state } = useContext(GlobalDataContext) as GlobalContextInterface;
  const point = dataPoint as keyof typeof state;

  return state[point] || "";
};

/** Here are some simplified getters/setters */
/**
 * @sets the value of the active entity to the store
 * @returns entity
 */
export const useSetActiveEntity = () => {
  const { dispatch } = useContext(GlobalDataContext) as GlobalContextInterface;
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
  const { state } = useContext(GlobalDataContext) as GlobalContextInterface;
  return state.activeEntity;
};

/**
 * @sets the value of the active entity to the store
 * @returns entity
 */
export const useSetActiveId = () => {
  const { dispatch } = useContext(GlobalDataContext) as GlobalContextInterface;
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
  const { state } = useContext(GlobalDataContext) as GlobalContextInterface;
  return state.activeId;
};

/**
 * @sets the value of the active view to the store
 * @returns view
 */
export const useSetActiveView = () => {
  const { dispatch } = useContext(GlobalDataContext) as GlobalContextInterface;
  const view = useGetQueryParam("view") || "main";

  useEffect(() => {
    dispatch({ type: "SET_ACTIVE_VIEW", payload: view });
  }, [view]);

  return view;
};

/**
 * @return the value of the active view
 */
export const useGetActiveView = () => {
  const { state } = useContext(GlobalDataContext) as GlobalContextInterface;
  return state.activeView;
};

/**
 * @sets the value of the active view to the store
 * @returns view
 */
export const useSetActiveSubview = () => {
  const { dispatch } = useContext(GlobalDataContext) as GlobalContextInterface;
  const subview = useGetQuery("view.1") || "main";

  useEffect(() => {
    dispatch({ type: "SET_ACTIVE_SUBVIEW", payload: subview });
  }, [subview]);

  return subview;
};
