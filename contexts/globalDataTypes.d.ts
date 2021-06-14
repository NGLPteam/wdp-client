interface GlobalState {
    activeEntity: string | undefined;
    activeId: string | undefined;
    activeView: string | undefined;
}

interface GlobalContextInterface {
    state: GlobalState;
    dispatch: React.Dispatch<any>;
}

interface GlobalAction {
    type: string;
    payload: any;
}
