import React, { useRef } from "react";
import { useTableHeaderRow } from "@react-aria/table";
import * as Styled from "./Table.styles";

export default function TableHeaderRow({ item, state, children }) {
  const ref = useRef();
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <Styled.HeaderRow {...rowProps} ref={ref}>
      {children}
    </Styled.HeaderRow>
  );
}
