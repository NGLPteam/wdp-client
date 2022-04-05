import { useRef, MutableRefObject } from "react";

const useLatestPresentValue = <T>(value: T): MutableRefObject<T> => {
  const ref = useRef<T>(value);

  if (value) ref.current = value;

  return ref;
};

export default useLatestPresentValue;
