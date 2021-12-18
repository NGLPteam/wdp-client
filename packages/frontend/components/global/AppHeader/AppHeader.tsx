import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useToggle, useWindowSize } from "@wdp/lib/hooks";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import * as Styled from "./AppHeader.styles";
import { breakpoints } from "theme/base/variables";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import MobileMenu from "components/layout/MobileMenu";
import InstallationName from "components/composed/instance/InstallationName";
import CommunityPicker from "components/composed/instance/InstallationName/CommunityPicker";
import AccountDropdown from "components/composed/viewer/AccountDropdown";
import Search from "components/forms/Search";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";

function AppHeader({ data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();
  const mobileNavId = useUID();
  const mobileNavRef = useRef(null);
  const [isActive, toggleActive, setActive] = useToggle();
  const { width } = useWindowSize();
  const prevWidth = useRef<number | undefined>();

  useEffect(() => {
    if (isActive) {
      if (prevWidth.current !== width) {
        if (width && width > parseInt(breakpoints[70])) {
          setActive(false);
        }
      }
    }
    prevWidth.current = width;
  }, [width, isActive, setActive]);

  useFocusTrap(mobileNavRef, isActive, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  return (
    <Styled.Header>
      <Styled.HeaderInner className="l-container-wide">
        {appData && (
          <>
            <Styled.LeftSide>
              <InstallationName data={appData} />
            </Styled.LeftSide>
            <Styled.MobileLeft>
              <CommunityPicker data={appData} />
            </Styled.MobileLeft>
          </>
        )}
        <Styled.RightSide>
          <AccountDropdown />
        </Styled.RightSide>
        <Styled.MobileRight>
          <MobileMenuToggle
            onToggle={toggleActive}
            label={t("nav.menu")}
            icon="hamburger24"
            ariaControls={mobileNavId}
            ariaExpanded={isActive}
          />
        </Styled.MobileRight>
      </Styled.HeaderInner>
      <MobileMenu
        ref={mobileNavRef}
        id={mobileNavId}
        active={isActive}
        onClose={toggleActive}
        data={appData}
      >
        <Styled.MobileList>
          <Search mobile />
          <AccountDropdown mobile />
        </Styled.MobileList>
      </MobileMenu>
    </Styled.Header>
  );
}

interface Props {
  data?: AppHeaderFragment$key | null;
}

export default AppHeader;

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    ...InstallationNameFragment
    ...CommunityPickerFragment
    ...MobileMenuFragment
  }
`;
