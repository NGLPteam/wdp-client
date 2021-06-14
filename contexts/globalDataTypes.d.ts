interface GlobalState {
    [activeEntity: string]: string | undefined;
    [activeId: string]: string | undefined;
    [activeView: string]: string | undefined;
}

interface GlobalContextInterface {
    state: GlobalState;
    dispatch: React.Dispatch<any>;
}

interface GlobalAction {
    type: string;
    payload: any;
}
