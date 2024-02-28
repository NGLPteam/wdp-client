import { useRef, useEffect } from "react";
import { useWindowSize } from "hooks";

export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const size = useWindowSize();

  useEffect(() => {
    document.body.style.setProperty(
      "--global-header-height",
      `${ref?.current?.clientHeight || 0}px`,
    );

    return function cleanup() {
      document.body.style.setProperty("--global-header-height", `0`);
    };
  }, [size]);

  return (
    <header role="banner" ref={ref}>
      {children}
    </header>
  );
}
