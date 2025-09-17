"use client";

import { startTransition, forwardRef } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "./";

// Copied from  https://github.com/vercel/next.js/blob/canary/packages/next/src/client/link.tsx#L180-L191
function isModifiedEvent(event: React.MouseEvent): boolean {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement;
  const target = eventTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.which === 2)
  );
}

/**
 * A custom Link component that wraps Next.js's next/link component.
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  Parameters<typeof NextLink>[0]
>(function Link({ href, children, replace, scroll, ...rest }, ref) {
  const router = useRouter();
  const startProgress = useProgress();

  return (
    <NextLink
      ref={ref}
      href={href}
      onClick={(e) => {
        if (isModifiedEvent(e)) return;
        e.preventDefault();
        startTransition(() => {
          startProgress();
          if (replace) {
            router.replace(href as string, { scroll });
          } else {
            router.push(href as string, { scroll });
          }
        });
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
});
