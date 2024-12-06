import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import CommunityNavListContent from "./CommunityNavListContent";
import styles from "./CommunityNavlist.module.css";

export default function CommunityNavList({ condensed, mobile }: Props) {
  const communityData = useContext(CommunityContext);
  const community = useFragment<CommunityNavListFragment$key>(
    fragment,
    communityData,
  );

  const listClasses = mobile
    ? styles.mobileList
    : classNames(styles.list, { [styles["list--condensed"]]: condensed });

  return (
    <ul className={listClasses} data-condensed={condensed}>
      {community && (
        <CommunityNavListContent data={community} mobile={mobile} />
      )}
    </ul>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  data?: CommunityNavListFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavListFragment on Community {
    ...CommunityNavListContentFragment
  }
`;
