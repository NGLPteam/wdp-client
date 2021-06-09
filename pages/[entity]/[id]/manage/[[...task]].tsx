import React from "react";
import useGetQueryParam from "hooks/useGetQueryParam";

export default function EntityManagePage() {
    const entity = useGetQueryParam("entity");
    const id = useGetQueryParam("id");
    const task = useGetQueryParam("task") || "properties";

    return (
        <div>
            <h1>
                {entity} {id} - Manage {task}
            </h1>
        </div>
    );
}
