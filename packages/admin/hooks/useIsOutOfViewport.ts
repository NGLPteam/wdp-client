import { RefObject, useEffect, useRef, useState } from "react";

interface Out {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  any: boolean;
  all: boolean;
}

function useIsOutOfViewport<T extends HTMLElement>(): [RefObject<T>, Out] {
  const elRef = useRef<T>(null);
  const [out, setOut] = useState<Out>({
    top: false,
    left: false,
    right: false,
    bottom: false,
    any: false,
    all: false,
  });

  useEffect(() => {
    if (elRef && elRef.current) {
      // Get element's bounding
      const bounding = elRef.current.getBoundingClientRect();

      out.top = bounding.top < 0;
      out.left = bounding.left < 0;
      out.bottom =
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight);
      out.right =
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth);
      out.any = out.top || out.left || out.bottom || out.right;
      out.all = out.top && out.left && out.bottom && out.right;

      setOut({ ...out });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // on load

  return [elRef, out];
}

export default useIsOutOfViewport;
