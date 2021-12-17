import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileMenu.styles";
import CommunityPicker from "components/composed/instance/InstallationName/CommunityPicker";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import { MobileMenuFragment$key } from "@/relay/MobileMenuFragment.graphql";

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

    const communities = useMaybeFragment(fragment, data);

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
          <CommunityPicker data={communities} />
          <MobileMenuToggle
            onToggle={onClose}
            icon="close24"
            label={t("common.close")}
            ariaControls={id}
            ariaExpanded={active}
          />
        </Styled.Header>
        <Styled.Content>
          <Styled.Inner>{children}</Styled.Inner>
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
  data?: MobileMenuFragment$key | null;
};

export default MobileMenu;

const fragment = graphql`
  fragment MobileMenuFragment on Query {
    ...CommunityPickerFragment
  }
`;
