import get from "lodash/get";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T> & {
  Header?: string;
  id?: string;
};

const PositionColumn = <T extends Node>({
  Header: header,
  id,
  ...props
}: Props<T>): ColumnDef<T> => {
  const { accessorKey } = getAccessorProps<T>(props);

  const { t } = useTranslation();

  const property = id ?? "position";

  return {
    id: property,
    header: header ?? t("forms.fields.position"),
    meta: {
      cellType: "position",
    },
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => get(originalRow, property) }),
    ...props,
  };
};

export default PositionColumn;
