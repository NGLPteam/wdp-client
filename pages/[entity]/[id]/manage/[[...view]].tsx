import React from "react";
import { useSetActiveEntity, useSetActiveId, useSetActiveView } from "hooks/useGlobalData";

export default function EntityManagePage() {
    const entity = useSetActiveEntity();
    const id = useSetActiveId();
    const view = useSetActiveView();

    return (
        <div>
            <h1>
                Manage {entity} #{id} - {view} view
            </h1>
        </div>
    );
}
