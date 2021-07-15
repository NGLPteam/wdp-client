import { ReactNode, CSSProperties } from "react";
import { CheckboxProps } from "./form-fields";

type Primitive = string | boolean | number;

export enum RenderType {
  Header = "Header",
  Footer = "Footer",
}

export interface ColumnOptions<T> {
  Header?: string | ReactNode;
  accessor?:
    | string
    | ((originalRow: Record<string, unknown>, rowIndex: number) => Primitive);
  disableSortBy?: boolean;
  Cell?: (props: CellProperties<T>) => ReactNode;
}

export interface CellProperties<T> {
  column: ColumnProperties;
  row: RowProperties<T>;
  getCellProps: () => CellProps;
  value: ReactNode;
  render: (type: string) => ReactNode;
}

export interface RowProperties<T> {
  cells: CellProperties[];
  allCells: CellProperties[];
  getRowProps: () => RowProps;
  getToggleRowSelectedProps: () => CheckboxProps;
  values: ReactNode[];
  original: T;
  state: Record<string, unknown>;
}

export interface ColumnProperties {
  id?: string;
  isVisible?: boolean;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  getSortByToggleProps?: () => SortByToggleProps;
  getHeaderProps: () => HeaderProps;
  render: (type: string) => ReactNode;
}

export interface RowProps {
  key: string;
  role: string;
}

export interface CellProps {
  key: string;
  role: string;
}

export interface HeaderGroupProperties {
  headers: ColumnProperties[];
  getHeaderGroupProps: () => HeaderGroupProps;
}

export interface HeaderProps {
  key: string;
  role: string;
}

export interface HeaderGroupProps {
  key: string;
  role: string;
}

export interface SortByToggleProps {
  onClick?: () => void;
  style?: CSSProperties;
  title?: string;
}
