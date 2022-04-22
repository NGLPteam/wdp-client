import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import MobileMenuToggle from "../MobileMenuToggle";
import * as Styled from "./MobileMenu.styles";
import { ProviderBar } from "components/global";

const MobileMenu = forwardRef(
  (
    {
      id,
      active,
      onClose,
      children,
      showGlobalSearch = false,
      showProviderBar = false,
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const lastActive = useRef(false);

    // Keep track of the last active value
    useEffect(() => {
      lastActive.current = active;
    }, [active]);

    return (
      <Styled.Wrapper
        as="nav"
        id={id}
        ref={ref}
        data-leave={!active && active !== lastActive.current}
        data-enter={active}
        className="a-bg-brand100"
      >
        <Styled.Header>
          {showGlobalSearch && (
            <Styled.SearchBlock>
              <></>
            </Styled.SearchBlock>
          )}
          <MobileMenuToggle
            label={t("close")}
            icon="close"
            onToggle={onClose}
          />
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
        {showProviderBar && <ProviderBar />}
      </Styled.Wrapper>
    );
  }
);

interface Props {
  id: string;
  active: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showGlobalSearch?: boolean;
  showProviderBar?: boolean;
}

export default MobileMenu;
