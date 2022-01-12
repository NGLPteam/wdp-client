import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileMenu.styles";
import InstallationName from "components/composed/instance/InstallationName";
import MobileMenuToggle from "components/layout/MobileMenuToggle";

const MobileMenu = forwardRef(
  (
    { children, active, id, onClose, communityPicker }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const prevActive = useRef(false);

    useEffect(() => {
      prevActive.current = active;
    }, [active]);

    return (
      <Styled.Wrapper
        as="nav"
        id={id}
        ref={ref}
        className="a-bg-custom20"
        data-leave={!active && active !== prevActive.current}
        data-enter={active}
      >
        <Styled.Header>
          {communityPicker}
          <MobileMenuToggle
            onToggle={onClose}
            icon="close24"
            label={t("common.close")}
            aria-controls={id}
            aria-expanded={active}
          />
        </Styled.Header>
        <Styled.Content>
          <Styled.Inner>{children}</Styled.Inner>
        </Styled.Content>
        <Styled.Footer className="a-bg-custom10">
          <InstallationName />
        </Styled.Footer>
      </Styled.Wrapper>
    );
  }
);

type Props = {
  children: React.ReactNode;
  active: boolean;
  id: string;
  onClose: () => void;
  communityPicker: React.ReactNode;
};

export default MobileMenu;
