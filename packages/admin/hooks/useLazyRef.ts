import { useRef } from "react";

/**
 * Lazily initialize a value that will remain static
 * @param init An initializer that will only be called once per component mount.
 * @returns the lazily-initalized value
 */
export default function useLazyRef<T>(init: LazyRefInit<T>): T {
  const ref = useRef<T>();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

/**
 * An initializer function that should only ever be called once
 * to build the ref's value.
 */
type LazyRefInit<T> = () => T;
