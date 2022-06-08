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

    const scrollBarWidth = window.innerWidth - documentElement.clientWidth;
    const documentLeft = documentElement.getBoundingClientRect().left;
    const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";

    const modalVisibleStyle = {
      overflow: "hidden",
      [paddingProp]: `${scrollBarWidth}px`,
    };

    if (visible) {
      Object.assign(body.style, modalVisibleStyle);
    }

    return () => (body.style.cssText = baseStyle);
  }, [visible]);
}
