import { useTableRowGroup } from "@react-aria/table";

export default function TableRowGroup({ type: Element, children }) {
  const { rowGroupProps } = useTableRowGroup();
  return <Element {...rowGroupProps}>{children}</Element>;
}
