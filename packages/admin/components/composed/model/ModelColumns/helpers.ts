import { PartialColumnish, Node } from "./types";
import type { NoInfer } from "@tanstack/react-table";

export function getAccessorProps<T extends Node>(props: PartialColumnish<T>) {
  const accessorKey = "accessoryKey" in props ? props.accessoryKey : null;
  const accessorFn = "accessorFn" in props ? props.accessorFn : null;

  return { accessorKey, accessorFn };
}

export function hasFragments<T extends Node>(value: NoInfer<T>): value is T {
  return "__fragments" in value;
}
