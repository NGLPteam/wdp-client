interface GlobalState {
  activeEntity: string | undefined;
  activeId: string | undefined;
  activeView: string | undefined;
}

interface GlobalContextInterface {
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}

interface GlobalAction {
  type: string;
  payload: string | undefined;
}
