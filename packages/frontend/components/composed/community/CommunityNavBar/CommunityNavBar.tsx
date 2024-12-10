"use client";

import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { SearchButton } from "components/atomic";
import { CommunityNavBarFragment$key } from "@/relay/CommunityNavBarFragment.graphql";
import { CommunityNavBarEntityFragment$key } from "@/relay/CommunityNavBarEntityFragment.graphql";
import CommunityName from "../CommunityName";
import CommunityNavList from "../CommunityNavList";
import styles from "./CommunityNavBar.module.css";

export default function CommunityNavBar({ data, entityData }: Props) {
  const community = useFragment(fragment, data);
  const entity = useFragment(entityFragment, entityData);

  return community ? (
    <div className="a-bg-custom10">
      <nav className={classNames("l-container-wide", styles.nav)}>
        <div>
          <CommunityName />
        </div>
        <div className={styles.right}>
          <CommunityNavList data={community} />
          <SearchButton size="lg" data={entity} />
        </div>
      </nav>
    </div>
  ) : null;
}

interface Props {
  data?: CommunityNavBarFragment$key | null;
  entityData?: CommunityNavBarEntityFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavBarFragment on Community {
    ...CommunityNameFragment
    ...CommunityNavListFragment
  }
`;

const entityFragment = graphql`
  fragment CommunityNavBarEntityFragment on Entity {
    ...SearchButtonFragment
  }
`;
