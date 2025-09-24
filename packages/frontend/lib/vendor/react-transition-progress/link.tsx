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
>(function Link({ href, children, replace, scroll: _scroll, ...rest }, ref) {
  const router = useRouter();
  const startProgress = useProgress();

  const to = href as string;

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
            router.replace(`${to}#`);
          } else {
            router.push(`${to}#`);
          }
        });
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
});
