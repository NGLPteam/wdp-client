import { useRef, MutableRefObject } from "react";

const useLatest = <T>(value: T): MutableRefObject<T> => {
  const ref = useRef<T>(value);

  ref.current = value;

  return ref;
};

export default useLatest;
