import React from "react";

export default function UserDetail({ id, view }: Props) {
    return (
        <div>
            <h1>User: {id}</h1>
        </div>
    );
}

interface Props {
    id: string;
    view: string;
}
