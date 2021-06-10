import React from "react";
import useGetQueryParam from "hooks/useGetQueryParam";

export default function EntityManagePage() {
    const entity = useGetQueryParam("entity");
    const id = useGetQueryParam("id");
    const view = useGetQueryParam("view") || "properties";

    return (
        <div>
            <h1>
                {entity} {id} - Manage {view}
            </h1>
        </div>
    );
}
