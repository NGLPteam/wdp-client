/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-explicit-any */
import {
  UseRowSelectHooks,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
} from "react-table";

declare module "react-table" {
  // If we add plugins to react-table, we'll need to enable them here as well. See
  // https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
  // for the full list of types that can be incorporated here. This file is building on
  // the react-table types we're importing using declaration merging:
  // https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  export interface TableOptions<
    D extends Record<string, unknown>
  > extends Partial<UseRowSelectOptions<D>>,
      UseSortByOptions<D>,
      // note that having Record here allows you to add anything to the options, this
      // matches the spirit of the underlying js library, but might be cleaner if it's
      // replaced by a more specific type that matches your feature set, this is a safe
      // default.
      Record<string, any> {
    data: ReadonlyArray<D>;
  }

  export interface Hooks<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends Partial<UseRowSelectHooks<D>>,
      UseSortByHooks<D> {}

  export interface ModelTableActionProps<
    D extends Record<string, unknown> = Record<string, unknown>
  > {
    row: Row<D>;
  }

  export interface ModelTableActionOptions<
    D extends Record<string, unknown> = Record<string, unknown>
  > {
    handleClick: (props: ModelTableActionProps<D>) => void;
  }

  export interface ModelTableActions<
    D extends Record<string, unknown> = Record<string, unknown>
  > {
    download?: ModelTableActionOptions<D>;
    edit?: ModelTableActionOptions<D>;
    delete?: ModelTableActionOptions<D>;
  }

  export interface TableInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends Partial<UseRowSelectInstanceProps<D>>,
      UseSortByInstanceProps<D> {
    actions?: ModelTableActions<D>;
  }

  export interface TableState<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends Partial<UseRowSelectState<D>>,
      UseSortByState<D> {}

  export interface ColumnInterface<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseSortByColumnOptions<D> {
    className?: string;
    // Maps to different cell styles
    cellType?: "thumbnail" | "name" | "actions" | string;
  }

  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseSortByColumnProps<D> {}

  // export interface Cell<
  //   D extends Record<string, unknown> = Record<string, unknown>>,
  //   V = any
  // > extends  {}

  export interface Row<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends Partial<UseRowSelectRowProps<D>> {}
}
/* eslint-enable @typescript-eslint/no-empty-interface, @typescript-eslint/no-explicit-any */
