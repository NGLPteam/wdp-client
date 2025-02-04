"use client";

import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import get from "lodash/get";
import { ExternalLink, Markdown, ORCIDLink } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import ContributionSummary from "@/components/composed/contribution/ContributionSummary";
import { ContributorDetailFragment$key } from "@/relay/ContributorDetailFragment.graphql";
import ContributorName from "../ContributorName";
import ContributorAvatar from "../ContributorAvatar";
import styles from "./ContributorDetail.module.css";

export default function ContributorDetail({ data }: Props) {
  const contributor = useFragment(fragment, data);
  const { t } = useTranslation();

  const contributionCount = useMemo(
    () =>
      get(contributor, "collectionContributions.nodes", []).length +
      get(contributor, "itemContributions.nodes", []).length,
    [contributor],
  );

  const hasLinks = useMemo(
    () => contributor && contributor.links && contributor.links.length > 0,
    [contributor],
  );

  const ContributionsComponent = contributionCount > 6 ? BackToTopBlock : "div";

  return contributor ? (
    <>
      <section className="a-bg-custom10">
        <div
          className={classNames("l-container-wide", styles.contributorWrapper)}
        >
          <header className={styles.name}>
            {contributor.image?.storage && (
              <ContributorAvatar data={contributor.image} />
            )}
            <h1 className="t-h3">
              <ContributorName data={contributor} />
            </h1>
          </header>
          {contributor.title && (
            <p className="t-label-lg">{contributor.title}</p>
          )}
          {contributor.affiliation && (
            <p className="t-copy-lighter">{contributor.affiliation}</p>
          )}
          {contributor.bio && (
            <div className="t-copy-light t-rte">
              <Markdown.Base>{contributor.bio}</Markdown.Base>
            </div>
          )}
          {(hasLinks || contributor.orcid) && (
            <ul className="t-label-sm">
              {contributor.orcid && (
                <li className={styles.bioLink}>
                  <ORCIDLink href={contributor.orcid}>
                    {contributor.orcid}
                  </ORCIDLink>
                </li>
              )}
              {hasLinks &&
                contributor.links.map(({ title, url }, i) => (
                  <li className={styles.bioLink} key={i}>
                    <ExternalLink href={url}>{title}</ExternalLink>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
      {contributionCount > 0 && (
        <section className="l-container-wide">
          <ContributionsComponent className={styles["contributions__wrapper"]}>
            <h2 className={classNames("t-h3", styles["contributions__header"])}>
              {t("layouts.contributions_header")}
            </h2>
            <ul className={styles["contributions__list"]}>
              {contributor.collectionContributions.nodes.map((node, i) => (
                <li className={styles["contributions__item"]} key={i}>
                  <ContributionSummary data={node} />
                </li>
              ))}
              {contributor.itemContributions.nodes.map((node, i) => (
                <li className={styles["contributions__item"]} key={i}>
                  <ContributionSummary data={node} />
                </li>
              ))}
            </ul>
          </ContributionsComponent>
        </section>
      )}
    </>
  ) : null;
}

interface Props {
  data?: ContributorDetailFragment$key | null;
  backRoute?: string;
  backLabel?: string;
}

const fragment = graphql`
  fragment ContributorDetailFragment on Contributor {
    ...ContributorNameFragment
    ... on Contributor {
      bio
      orcid
      collectionContributions {
        nodes {
          ...ContributionSummaryFragment
        }
      }
      itemContributions {
        nodes {
          ...ContributionSummaryFragment
        }
      }
      image {
        storage
        ...ContributorAvatarFragment
      }
      links {
        title
        url
      }
    }
    ... on PersonContributor {
      affiliation
      title
    }
  }
`;
