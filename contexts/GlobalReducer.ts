const Reducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case "SET_ACTIVE_ENTITY":
      return {
        ...state,
        activeEntity: action.payload,
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
    default:
      return state;
  }
};

export default Reducer;
