import React from "react";
import { Row } from "react-table";

function ModelGrid<
  T extends Record<string, unknown> = Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>({ rows }: Props<T>) {
  return <p>Grid placeholder</p>;
}

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  rows: Row<T>[];
}

export default ModelGrid;
