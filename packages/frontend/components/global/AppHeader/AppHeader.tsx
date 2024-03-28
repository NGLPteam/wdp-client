import { graphql } from "react-relay";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { SearchButton } from "components/atomic";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import InstallationName from "components/composed/instance/InstallationName";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import AccountDropdown from "components/composed/viewer/AccountDropdown";
import CommunityNavList from "components/composed/community/CommunityNavList";
import Search from "components/forms/Search";
import CommunityName from "components/composed/community/CommunityName";
import BaseDrawer from "components/layout/BaseDrawer";
import useGlobalContext from "contexts/useGlobalContext";
import { AppHeaderCommunityFragment$key } from "@/relay/AppHeaderCommunityFragment.graphql";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import { AppHeaderEntityFragment$key } from "@/relay/AppHeaderEntityFragment.graphql";
import SkipLink from "../SkipLink";
import * as Styled from "./AppHeader.styles";

function AppHeader({ entityData, data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const { communityData } = useGlobalContext() ?? {};

  const community = useMaybeFragment(communityFragment, communityData);

  const entity = useMaybeFragment(entityFragment, entityData);

  const pathRegEx = /^\/communities\/[A-Za-z0-9]{30,32}/;

  const isCommunityRoot = pathRegEx.test(usePathname());

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
                  <InstallationName data={appData?.globalConfiguration} />
                </Styled.InstallationNameWrapper>
                <CommunityPicker data={appData} />
              </>
            )}
          </Styled.LeftSide>
          <Styled.RightSide>
            {!isCommunityRoot && (
              <>
                <CommunityNavList condensed />
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
          header={<CommunityPicker data={appData} />}
          footer={<InstallationName data={appData?.globalConfiguration} />}
          dialog={dialog}
          label={t("nav.menu")}
        >
          <Styled.MobileList>
            <CommunityNavList mobile />
            <Search id="headerSearch" mobile />
            <AccountDropdown mobile />
          </Styled.MobileList>
        </BaseDrawer>
      </Styled.Header>
      {true && (
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
  data?: AppHeaderFragment$key | null;
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
      ...InstallationNameFragment
    }
    ...CommunityPickerFragment
  }
`;

const communityFragment = graphql`
  fragment AppHeaderCommunityFragment on Community {
    ...CommunityNavListFragment
    ...CommunityNameFragment
  }
`;

const entityFragment = graphql`
  fragment AppHeaderEntityFragment on Entity {
    ...SearchButtonFragment
  }
`;
