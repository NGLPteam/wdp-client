import React from "react";
import useGetQueryParam from "hooks/useGetQueryParam";

export default function SettingsPage() {
    const view = useGetQueryParam("view") || "main";

    return (
        <div>
            <h1>Settings: {view}</h1>
        </div>
    );
}
