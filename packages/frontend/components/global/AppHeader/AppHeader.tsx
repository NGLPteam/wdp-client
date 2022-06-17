import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import SkipLink from "../SkipLink";
import * as Styled from "./AppHeader.styles";
import { SearchButton } from "components/atomic";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import InstallationName from "components/composed/instance/InstallationName";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import AccountDropdown from "components/composed/viewer/AccountDropdown";
import CommunityNavList from "components/composed/community/CommunityNavList";
import Search from "components/forms/Search";
import { AppHeaderCommunityFragment$key } from "@/relay/AppHeaderCommunityFragment.graphql";
import { RouteHelper } from "routes";
import CommunityName from "components/composed/community/CommunityName";
import BaseDrawer from "components/layout/BaseDrawer";
import { useGlobalContext } from "contexts";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import { AppHeaderEntityFragment$key } from "@/relay/AppHeaderEntityFragment.graphql";

function AppHeader({ communityData, entityData }: Props) {
  const globalData = useGlobalContext();

  const appData = useMaybeFragment<AppHeaderFragment$key>(fragment, globalData);

  const community = useMaybeFragment(communityFragment, communityData);

  const entity = useMaybeFragment(entityFragment, entityData);

  const isCommunityRoot = RouteHelper.isRouteNameFuzzyActive("community");

  const { t } = useTranslation();

  const dialog = useDialogState({ animated: true });

  const totalCommunities = appData?.communities.pageInfo.totalCount || 0;

  return (
    <>
      <Styled.Header>
        <SkipLink toId="main" />
        <Styled.HeaderInner className="l-container-wide">
          <Styled.LeftSide>
            {(!isCommunityRoot ||
              (isCommunityRoot && totalCommunities > 1)) && (
              <>
                <Styled.InstallationNameWrapper
                  $logoMode={appData?.globalConfiguration?.site?.logoMode}
                >
                  <InstallationName />
                </Styled.InstallationNameWrapper>
                <CommunityPicker active={community} />
              </>
            )}
          </Styled.LeftSide>
          <Styled.RightSide>
            {community && !isCommunityRoot && (
              <>
                <CommunityNavList data={community} condensed />
                <SearchButton size="sm" data={entity} />
              </>
            )}
            <AccountDropdown condensed={!isCommunityRoot} />
          </Styled.RightSide>
          <Styled.MobileRight>
            <DialogDisclosure as={MobileMenuToggle} {...dialog} />
          </Styled.MobileRight>
        </Styled.HeaderInner>
        <BaseDrawer
          header={<CommunityPicker active={community} />}
          footer={<InstallationName />}
          dialog={dialog}
          label={t("nav.menu")}
        >
          <Styled.MobileList>
            {community && <CommunityNavList data={community} mobile />}
            <Search id="headerSearch" mobile />
            <AccountDropdown mobile />
          </Styled.MobileList>
        </BaseDrawer>
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
  communityData?: AppHeaderCommunityFragment$key | null;
  entityData?: AppHeaderEntityFragment$key | null;
}

export default AppHeader;

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    communities {
      pageInfo {
        totalCount
      }
    }
    globalConfiguration {
      site {
        logoMode
      }
    }
  }
`;

const communityFragment = graphql`
  fragment AppHeaderCommunityFragment on Community {
    ...CommunityPickerActiveFragment
    ...CommunityNavListFragment
    ...CommunityNameFragment
  }
`;

const entityFragment = graphql`
  fragment AppHeaderEntityFragment on Entity {
    ...SearchButtonFragment
  }
`;
