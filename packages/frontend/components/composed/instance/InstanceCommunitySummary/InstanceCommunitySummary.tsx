import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { getSchemaPluralName } from "helpers";
import { NamedLink, Image } from "components/atomic";
import Markdown from "components/atomic/Markdown";
import { InstanceCommunitySummaryFragment$key } from "@/relay/InstanceCommunitySummaryFragment.graphql";
import styles from "./InstanceCommunitySummary.module.css";

export default function InstanceCommunitySummary({ data }: Props) {
  const community = useFragment(fragment, data);

  const { t } = useTranslation();

  return community && community.slug ? (
    <NamedLink href={`/communities/${community.slug}`}>
      <div className={classNames("a-bg-neutral00", styles.link)}>
        {community.logo?.storage ? (
          <figure
            className={classNames(styles.figure, styles["figure--padded"])}
          >
            <div className={styles.logo}>
              <Image
                data={community.logo.original}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </figure>
        ) : community.heroImage?.storage ? (
          <figure className={styles.figure}>
            <Image
              data={community.heroImage.large?.webp}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
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
          {community.schemaRanks && (
            <ul className={styles["count__list"]}>
              {community.schemaRanks.map(({ slug, count, name }) => {
                return (
                  <li className={styles["count__item"]} key={slug}>
                    <span>
                      {count > 1 ? getSchemaPluralName(slug, name, t) : name}
                    </span>
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
    schemaRanks {
      slug
      name
      count
    }
    heroImage {
      storage
      large {
        webp {
          ...ImageFragment
        }
      }
    }
    logo {
      storage
      original {
        ...ImageFragment
      }
    }
  }
`;
