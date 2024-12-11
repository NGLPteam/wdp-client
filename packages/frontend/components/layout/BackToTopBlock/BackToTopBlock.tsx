"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useWindowSize } from "@wdp/lib/hooks";
import { BackToTopButton } from "components/atomic";
import styles from "./BackToTopBlock.module.css";

/**
 * A block of content with a contained back to top button.
 * When clicked, the back to top button scrolls to the top of the wrapper.
 * Can be used with other styled components:
 * <Styled.SectionInner as={BackToTopBlock}>
 */
export default function BackToTopBlock({ className, children }: Props) {
  const [hideButton, setHideButton] = useState(true);

  const elRef = useRef<HTMLDivElement | null>(null);

  const childRef = useRef<HTMLDivElement | null>(null);

  const size = useWindowSize();

  const handleClick = useCallback(() => {
    if (!elRef || !elRef.current || !document) return;

    // Get the top position
    const bounding = elRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + bounding.top;

    // Scroll to top
    document.body.scrollTop = scrollTop; // For Safari
    document.documentElement.scrollTop = scrollTop; // For Chrome, Firefox, IE and Opera
  }, [elRef]);

  useEffect(() => {
    const bounding = childRef?.current?.getBoundingClientRect();

    if (bounding && size?.height && bounding.height > size.height) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [size, childRef, setHideButton]);

  return (
    <div ref={elRef} className={classNames(styles.section, className)}>
      <div className={styles.children} ref={childRef}>
        {children}
      </div>
      <div className={styles.button} hidden={hideButton}>
        <BackToTopButton onClick={handleClick} />
      </div>
    </div>
  );
}

interface Props {
  className?: string;
  children: React.ReactNode;
}
