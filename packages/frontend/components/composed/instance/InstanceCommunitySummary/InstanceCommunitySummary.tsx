import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { NamedLink } from "components/atomic";
import Markdown from "components/atomic/Markdown";
import { InstanceCommunitySummaryFragment$key } from "@/relay/InstanceCommunitySummaryFragment.graphql";
import { generateSrcSet } from "@/helpers/generateSrcSet";
import styles from "./InstanceCommunitySummary.module.css";

export default function InstanceCommunitySummary({ data }: Props) {
  const community = useFragment(fragment, data);

  const heroImage = community.heroImage.large?.webp;
  const logoImage = community.logo.original;

  return community && community.slug ? (
    <NamedLink href={`/communities/${community.slug}`} prefetch scroll={false}>
      <div className={classNames("a-bg-neutral00", styles.link)}>
        {logoImage?.url ? (
          <figure
            className={classNames(styles.figure, styles["figure--padded"])}
          >
            <div className={styles.logo}>
              <img
                alt={`${community.title} logo`}
                src={logoImage.url}
                height={logoImage.height ?? 180}
                width={logoImage.width ?? 355}
                className={styles.logoImage}
              />
            </div>
          </figure>
        ) : heroImage?.url ? (
          <figure className={styles.figure}>
            <img
              alt={heroImage.alt ?? ""}
              src={heroImage.url}
              srcSet={generateSrcSet(community.heroImage)}
              sizes="416px"
              height={heroImage.height ?? 180}
              width={heroImage.width ?? 355}
              className={styles.heroImage}
            />
          </figure>
        ) : null}
        <div className={classNames("a-bg-custom10", styles.text)}>
          <h3 className="t-h4">{community.title}</h3>
          {community.tagline && (
            <em className={styles.tagline}>{community.tagline}</em>
          )}
          {community.summary && (
            <Markdown.Summary
              className={classNames(
                styles.summary,
                "t-color-light t-copy-sm line-clamp-3",
              )}
            >
              {community.summary}
            </Markdown.Summary>
          )}
          {!!community.orderings.nodes.length && (
            <ul className={styles["count__list"]}>
              {community.orderings.nodes
                .filter(({ count }) => !!count)
                .map(({ slug, count, name }) => {
                  return (
                    <li className={styles["count__item"]} key={slug}>
                      <span>{name}</span>
                      <span>{new Intl.NumberFormat().format(count)}</span>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </NamedLink>
  ) : null;
}

type Props = {
  data: InstanceCommunitySummaryFragment$key;
};

const fragment = graphql`
  fragment InstanceCommunitySummaryFragment on Community {
    slug
    title
    tagline
    summary
    orderings {
      nodes {
        slug
        name
        count
      }
    }
    heroImage {
      large {
        webp {
          alt
          url
          width
          height
        }
      }
      medium {
        webp {
          url
          width
        }
      }
      small {
        webp {
          url
          width
        }
      }
    }
    logo {
      original {
        alt
        url
        width
        height
      }
    }
  }
`;
