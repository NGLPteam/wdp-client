import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@wdp/lib/hooks";
import * as Styled from "./BackToTopBlock.styles";
import { Button } from "components/atomic";

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

  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    let scrollTop = 0;

    // Get the top position
    if (elRef && elRef.current) {
      const bounding = elRef.current.getBoundingClientRect();
      scrollTop = window.pageYOffset + bounding.top;
    }

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
      <div ref={childRef}>{children}</div>
      <Styled.ButtonWrapper hidden={hideButton}>
        <Button onClick={handleClick} secondary icon="arrowUp">
          {t("common.back_to_top")}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Section>
  );
}

interface Props {
  className?: string;
  children: React.ReactNode;
}
