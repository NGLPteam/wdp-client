"use client";

import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  InstanceCommunitiesFragment$data,
  InstanceCommunitiesFragment$key,
} from "@/relay/InstanceCommunitiesFragment.graphql";
import InstanceCommunitySummary from "../InstanceCommunitySummary/InstanceCommunitySummary";
import styles from "./InstanceCommunities.module.css";

export default function InstanceCommunities({ data }: Props) {
  const communities = useFragment(fragment, data);

  const { t } = useTranslation();

  return communities.edges?.length > 0 ? (
    <section className={classNames("a-bg-neutral90", styles.inner)}>
      <div className="l-container-wide">
        <h2 className={classNames(styles.header, "t-h3")}>
          {t("layouts.instance_communities_header")}
        </h2>
        <ul className={styles.list}>
          {communities.edges.map(({ node }: Node) => (
            <li key={node.slug}>
              <InstanceCommunitySummary data={node} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : null;
}

type Node = InstanceCommunitiesFragment$data["edges"][number];

type Props = {
  data: InstanceCommunitiesFragment$key;
};

const fragment = graphql`
  fragment InstanceCommunitiesFragment on CommunityConnection {
    edges {
      node {
        slug
        ...InstanceCommunitySummaryFragment
      }
    }
  }
`;
