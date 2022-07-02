/* This hook is based on and significantly borrows from the fix Reakit is implementing for their v2 release. See: https://github.com/ariakit/ariakit/pull/1271/files  */

import { useLayoutEffect, useEffect, useRef } from "react";

export default function usePreventBodyScroll(visible = false) {
  const isBrowser =
    typeof window !== "undefined" && !!window.document?.createElement;
  const safeEffect = isBrowser ? useLayoutEffect : useEffect;

  const prevVisible = useRef(visible);

  safeEffect(() => {
    if (prevVisible.current === visible) return;

    const { documentElement, body } = document;

    /* eslint-disable-next-line  @typescript-eslint/no-empty-function */
    if (!body || !documentElement) return () => {};

    const baseStyle = body.style.cssText;

    const modalVisibleStyle = {
      overflow: "hidden",
      scrollbarGutter: "stable",
      position: "absolute",
      width: "100%",
    };

    if (visible) {
      Object.assign(body.style, modalVisibleStyle);
      prevVisible.current = true;
    }

    return () => (body.style.cssText = baseStyle);
  }, [visible]);
}
