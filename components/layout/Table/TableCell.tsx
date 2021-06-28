import { useTableCell } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import * as Styled from "./Table.styles";

function TableCell({ cell, state }) {
  const ref = useRef();
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Styled.Cell
      {...mergeProps(gridCellProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {cell.rendered}
    </Styled.Cell>
  );
}

export default TableCell;
