import { RefObject, useEffect } from "react";

export const useEventListener = (
  event: keyof HTMLElementEventMap,
  callback: EventListenerOrEventListenerObject
) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export const useKeyDownEvent = (
  callback: EventListenerOrEventListenerObject
) => {
  useEventListener("keydown", callback);
};

export const useClickEvent = (callback: EventListenerOrEventListenerObject) => {
  useEventListener("click", callback);
};

// Hook
export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: EventListener
) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          !ref.current ||
          (event.target instanceof Node && ref?.current.contains(event.target))
        ) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
