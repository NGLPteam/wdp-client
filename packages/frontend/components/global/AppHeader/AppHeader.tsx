import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useToggle, useWindowSize } from "@wdp/lib/hooks";
import { useFocusTrap } from "@castiron/hooks/";
import * as Styled from "./AppHeader.styles";
import { breakpoints } from "theme/base/variables";
import { SearchButton } from "components/atomic";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import MobileMenu from "components/layout/MobileMenu";
import InstallationName from "components/composed/instance/InstallationName";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import AccountDropdown from "components/composed/viewer/AccountDropdown";
import CommunityNavList from "components/composed/community/CommunityNavList";
import Search from "components/forms/Search";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import { AppHeaderCommunityFragment$key } from "@/relay/AppHeaderCommunityFragment.graphql";
import { RouteHelper } from "routes";
import CommunityName from "components/composed/community/CommunityName";

function AppHeader({ data, communityData }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const community = useMaybeFragment(communityFragment, communityData);

  const isCommunityRoot = RouteHelper.isRouteNameFuzzyActive("community");

  const { t } = useTranslation();

  const mobileNavId = "appMobileNav";

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
    <>
      <Styled.Header>
        <Styled.HeaderInner className="l-container-wide">
          <Styled.LeftSide>
            <Styled.InstallationName as={InstallationName} />
            <CommunityPicker data={appData} active={community} />
          </Styled.LeftSide>
          <Styled.RightSide>
            {community && !isCommunityRoot && (
              <>
                <CommunityNavList data={community} condensed />
                <SearchButton size="sm" data={community} />
              </>
            )}
            <AccountDropdown condensed={!isCommunityRoot} />
          </Styled.RightSide>
          <Styled.MobileRight>
            <MobileMenuToggle
              onToggle={toggleActive}
              label={t("nav.menu")}
              icon="hamburger24"
              aria-controls={mobileNavId}
              aria-expanded={isActive}
            />
          </Styled.MobileRight>
        </Styled.HeaderInner>
        <MobileMenu
          ref={mobileNavRef}
          id={mobileNavId}
          active={isActive}
          onClose={toggleActive}
          communityPicker={
            <CommunityPicker data={appData} active={community} />
          }
        >
          <Styled.MobileList>
            {community && <CommunityNavList data={community} mobile />}
            <Search mobile />
            <AccountDropdown mobile />
          </Styled.MobileList>
        </MobileMenu>
      </Styled.Header>
      {community && (
        <Styled.PrintHeader aria-hidden>
          <CommunityName data={community} />
        </Styled.PrintHeader>
      )}
    </>
  );
}

interface Props {
  data?: AppHeaderFragment$key | null;
  communityData?: AppHeaderCommunityFragment$key | null;
}

export default AppHeader;

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    ...CommunityPickerFragment
  }
`;

const communityFragment = graphql`
  fragment AppHeaderCommunityFragment on Community {
    ...CommunityPickerActiveFragment
    ...CommunityNavListFragment
    ...SearchButtonFragment
    ...CommunityNameFragment
  }
`;
