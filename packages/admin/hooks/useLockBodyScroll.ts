import { useLayoutEffect } from "react";

/**
 * From https://usehooks.com/
 *
 * Prevents users from being able to scroll the body of a page while a modal or dialog is open.
 */
export default function useLockBodyScroll(): void {
  // useLayoutEffect callback return type is "() => void" type
  useLayoutEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
