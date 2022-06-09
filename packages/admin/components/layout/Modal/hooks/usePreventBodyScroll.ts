/* This hook is based on and significantly borrows from the fix Reakit is implementing for their v2 release. See: https://github.com/ariakit/ariakit/pull/1271/files  */

import { useLayoutEffect, useEffect } from "react";

export default function usePreventBodyScroll(visible = false) {
  const isBrowser =
    typeof window !== "undefined" && !!window.document?.createElement;
  const safeEffect = isBrowser ? useLayoutEffect : useEffect;

  safeEffect(() => {
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
    }

    return () => (body.style.cssText = baseStyle);
  }, [visible]);
}
