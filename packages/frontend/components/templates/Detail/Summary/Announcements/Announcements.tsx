import { useTranslation } from "react-i18next";
import { useFragment, graphql } from "react-relay";
import classNames from "classnames";
import { useRouteSlug } from "@wdp/lib/routes";
import { Link, NamedLink, ReadMoreLink } from "@/components/atomic";
import { AnnouncementsFragment$key } from "@/relay/AnnouncementsFragment.graphql";
import styles from "./Announcements.module.css";

export default function EntityAnnouncements({ data }: Props) {
  const announcements = useFragment<AnnouncementsFragment$key>(fragment, data);

  const { t } = useTranslation();

  const slug = useRouteSlug();

  return !!announcements.nodes.length && slug ? (
    <aside className={classNames("a-bg-neutral00", styles.block)}>
      <h4 className={styles.header}>{t("layouts.announcements_header")}</h4>
      <ul className="t-unstyled-list">
        {announcements.nodes.map((announcement) => (
          <li className={styles.item} key={announcement.slug}>
            <h5 className="t-copy-medium">
              <NamedLink
                href={`/collections/${slug}/announcements/${announcement.slug}`}
              >
                <Link as="span">{announcement.header}</Link>
              </NamedLink>
            </h5>
            <div className={classNames("t-rte", styles.itemContent)}>
              <p>{announcement.teaser}</p>
            </div>
            <NamedLink
              href={`/collections/${slug}/announcements/${announcement.slug}`}
            >
              <ReadMoreLink className="t-label-mix" />
            </NamedLink>
          </li>
        ))}
      </ul>
    </aside>
  ) : null;
}

interface Props {
  data: AnnouncementsFragment$key;
}

const fragment = graphql`
  fragment AnnouncementsFragment on AnnouncementConnection {
    nodes {
      teaser
      header
      slug
    }
  }
`;
