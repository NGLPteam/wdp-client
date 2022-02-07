import React, { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@wdp/lib/hooks";
import * as Styled from "./BackToTopBlock.styles";
import { BackToTopButton } from "components/atomic";

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
    const scrollTop = window.pageYOffset + bounding.top;

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
    <Styled.Section ref={elRef} className={className}>
      <Styled.ChildrenWrapper ref={childRef}>{children}</Styled.ChildrenWrapper>
      <Styled.ButtonWrapper hidden={hideButton}>
        <BackToTopButton hideLabelOnMobile onClick={handleClick} />
      </Styled.ButtonWrapper>
    </Styled.Section>
  );
}

interface Props {
  className?: string;
  children: React.ReactNode;
}
