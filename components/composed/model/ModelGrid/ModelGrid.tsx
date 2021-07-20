import React from "react";
import { Row } from "react-table";

function ModelGrid<
  T extends Record<string, unknown> = Record<string, unknown>
>({ rows }: Props<T>) {
  return <></>;
}

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  rows: Row<T>[];
}

export default ModelGrid;
