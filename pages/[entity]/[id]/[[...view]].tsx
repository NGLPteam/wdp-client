import React from "react";
import useGetQueryParam from "hooks/useGetQueryParam";

export default function EntityDetailPage() {
    const entity = useGetQueryParam("entity");
    const id = useGetQueryParam("id");
    const view = useGetQueryParam("view") || "main";

    return (
        <div>
            <h1>
                {entity}: {id} -- view: {view}
            </h1>
        </div>
    );
}
