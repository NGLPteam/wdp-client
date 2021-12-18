import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { useToggle, useWindowSize } from "@wdp/lib/hooks";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import AccountDropdown from "../../viewer/AccountDropdown";
import CommunityNavList from "../CommunityNavList";
import * as Styled from "./CommunityCondensedNav.styles";
import { breakpoints } from "theme/base/variables";
import InstallationName from "components/composed/instance/InstallationName";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import MobileMenu from "components/layout/MobileMenu";
import Search from "components/forms/Search";
import CommunityPicker from "components/composed/instance/InstallationName/CommunityPicker";
import { CommunityCondensedNavFragment$key } from "@/relay/CommunityCondensedNavFragment.graphql";
import { SearchButton } from "components/atomic";
import { CommunityCondensedNavAppFragment$key } from "@/relay/CommunityCondensedNavAppFragment.graphql";

function CommunityCondensedNav({ data, communityData }: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);

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
    <Styled.Header className="a-bg-custom20">
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
          {community && <CommunityNavList data={community} condensed />}
          <SearchButton size="sm" />
          <AccountDropdown condensed />
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
          {community && <CommunityNavList data={community} mobile />}
          <Search mobile />
          <AccountDropdown mobile />
        </Styled.MobileList>
      </MobileMenu>
    </Styled.Header>
  );
}

interface Props {
  data?: CommunityCondensedNavAppFragment$key | null;
  communityData?: CommunityCondensedNavFragment$key | null;
}

export default CommunityCondensedNav;

const appFragment = graphql`
  fragment CommunityCondensedNavAppFragment on Query {
    ...InstallationNameFragment
    ...CommunityPickerFragment
    ...MobileMenuFragment
  }
`;

const fragment = graphql`
  fragment CommunityCondensedNavFragment on Community {
    ...CommunityNavListFragment
  }
`;
