import { useTranslation } from "react-i18next";
import { useFragment } from "react-relay";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import { Link, NamedLink, ReadMoreLink } from "components/atomic";
import { EntityAnnouncementsFragment$key } from "@/relay/EntityAnnouncementsFragment.graphql";
import * as Styled from "./EntityAnnouncements.styles";

export default function EntityAnnouncements({ data }: Props) {
  const announcements = useFragment<EntityAnnouncementsFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();

  const slug = useRouteSlug();

  return !!announcements.nodes.length && slug ? (
    <Styled.AnnouncementsBlock as="aside" className="a-bg-neutral00">
      <Styled.AnnouncementsHeader>
        {t("layouts.announcements_header")}
      </Styled.AnnouncementsHeader>
      <ul className="t-unstyled-list">
        {announcements.nodes.map((announcement) => (
          <Styled.AnnouncementItem key={announcement.slug}>
            <h5 className="t-copy-medium">
              <NamedLink
                href={`/collections/${slug}/announcements/${announcement.slug}`}
                passHref
              >
                <Link>{announcement.header}</Link>
              </NamedLink>
            </h5>
            <Styled.AnnouncementBody className="t-rte">
              <p>{announcement.teaser}</p>
            </Styled.AnnouncementBody>
            <NamedLink
              href={`/collections/${slug}/announcements/${announcement.slug}`}
            >
              <ReadMoreLink className="t-label-mix" />
            </NamedLink>
          </Styled.AnnouncementItem>
        ))}
      </ul>
    </Styled.AnnouncementsBlock>
  ) : null;
}

interface Props {
  data: EntityAnnouncementsFragment$key;
}

const fragment = graphql`
  fragment EntityAnnouncementsFragment on AnnouncementConnection {
    nodes {
      teaser
      header
      slug
    }
  }
`;
