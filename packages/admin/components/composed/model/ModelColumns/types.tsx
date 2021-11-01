import type { Column } from "react-table";

export type Node = Record<string, unknown> & {
  slug?: string;
};

export interface CreatableNode extends Node {
  createdAt?: string | null;
}

export interface UpdatableNode extends Node {
  updatedAt?: string | null;
}

export interface SchemaVersionableNode extends Node {
  schemaVersion: {
    name: string;
    number: string;
  };
}

// Use if the column requires an accessor to be passed in.
export type RequiredColumnish<T extends Node> = Column<T>;

// Use if the column is self sufficient
export type PartialColumnish<T extends Node> = Partial<RequiredColumnish<T>>;
