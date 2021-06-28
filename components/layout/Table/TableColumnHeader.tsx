import { useTableColumnHeader } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { IconFactory } from "components/factories";
import * as Styled from "./Table.styles";

export default function TableColumnHeader({ column, state }) {
  const ref = useRef();
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  const arrowRotation =
    state.sortDescriptor?.direction === "ascending" ? 0 : 180;

  return (
    <Styled.HeaderCell
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      <Styled.HeaderCellInner>
        <span>{column.rendered}</span>
        {column.props.allowsSorting && (
          <IconFactory
            icon="chevron"
            aria-hidden="true"
            rotate={arrowRotation}
          />
        )}
      </Styled.HeaderCellInner>
    </Styled.HeaderCell>
  );
}
