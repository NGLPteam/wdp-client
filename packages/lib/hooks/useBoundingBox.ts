import { RefObject, useEffect, useRef, useState } from "react";

export type BoundingRect = Omit<DOMRect, "toJSON">;

const init = {
  x: 0,
  y: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
};

/**
 * Returns a ref object and the ref's bounding box.
 * Example:
 * const [elRef, bounding] = useBoundingBox<HTMLDivElement>();
 * const width = boudning.width;
 * <div ref={elRef} />
 * */
export default function useBoundingBox<T extends HTMLElement>(): [
  RefObject<T>,
  BoundingRect,
] {
  const elRef = useRef<T>(null);
  const [bounding, setBounding] = useState<BoundingRect>(init);

  useEffect(() => {
    if (elRef && elRef.current) {
      const bounding = elRef.current.getBoundingClientRect();
      setBounding(bounding);
    }
  }, []);

  return [elRef, bounding];
}
