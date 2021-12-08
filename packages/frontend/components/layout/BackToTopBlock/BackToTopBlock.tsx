import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./BackToTopBlock.styles";
import { Button } from "components/atomic";

/**
 * A block of content with a contained back to top button.
 * When clicked, the back to top button scrolls to the top of the wrapper.
 * Can be used with other styled components:
 * <Styled.SectionInner as={BackToTopBlock}>
 */
export default function BackToTopBlock({ className, children }: Props) {
  const elRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <Styled.Section ref={elRef} className={className}>
      <Styled.ChildWrapper>{children}</Styled.ChildWrapper>
      <Styled.ButtonWrapper>
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
