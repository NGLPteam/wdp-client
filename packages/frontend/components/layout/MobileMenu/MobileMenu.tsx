import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CommunityPicker from "components/composed/instance/InstallationName/CommunityPicker";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import * as Styled from "./MobileMenu.styles";

const MobileMenu = forwardRef(
  (
    { children, active, id, onClose, data }: Props,
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
        <Styled.Header className="l-container-wide">
          <CommunityPicker data={data} />
          <MobileMenuToggle
            onToggle={onClose}
            icon="close"
            label={t("common.close")}
          />
        </Styled.Header>
        <Styled.Content>
          <Styled.Inner className="l-container-wide">{children}</Styled.Inner>
        </Styled.Content>
        <Styled.Footer className="a-bg-custom10">
          <p className="t-label-mix">WDP Installation Name</p>
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
  data: any;
};

export default MobileMenu;
