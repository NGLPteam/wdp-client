import { useState } from "react";

function st8(this, ...args) {
  switch (arguments.length) {
    case 0:
      return this[0];
    case 1:
      return this[1](args[0]);
    default:
      throw new Error("Expected 0 or 1 arguments");
  }
}

export type St8<T> = {
  (): T;
  (newValue: T | ((current: T) => T)): void;
};

export function useSt8<T>(initial: (() => T) | T): St8<T> {
  return st8.bind(useState(initial));
}

export default useSt8;
