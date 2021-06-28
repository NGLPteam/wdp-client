import React, { useRef } from "react";
import { useTableRow } from "@react-aria/table";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import * as Styled from "./Table.styles";

export default function TableRow({ item, children, state }) {
  const ref = useRef();
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow({ node: item }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Styled.Row
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
      data-selected={isSelected}
    >
      {children}
    </Styled.Row>
  );
}
