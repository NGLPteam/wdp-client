import { useState } from "react";
import type { RowSelectionState } from "@tanstack/react-table";

export default function useTableRowSelection() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return [rowSelection, setRowSelection];
}
