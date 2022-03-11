import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import * as Styled from "./EntityAnnouncementLayout.styles";
import { EntityAnnouncementLayoutFragment$key } from "@/relay/EntityAnnouncementLayoutFragment.graphql";
import { Markdown } from "components/atomic";

export default function EntityAnnouncementLayout({ data }: Props) {
  const announcement = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return announcement ? (
    <Styled.Wrapper className="t-rte l-container-wide a-bg-neutral00">
      <h3>{announcement.header}</h3>
      {announcement.updatedAt && (
        <p>
          {t("common.last_updated", {
            value: formatDate(announcement.updatedAt, "L/d/yy"),
          })}
        </p>
      )}
      {!announcement.updatedAt && announcement.publishedOn && (
        <p>
          {t("common.last_updated", {
            value: formatDate(announcement.publishedOn, "L/d/yy"),
          })}
        </p>
      )}
      <Markdown.Base className="t-rte">{announcement.body}</Markdown.Base>
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  /* Item data */
  data?: EntityAnnouncementLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityAnnouncementLayoutFragment on Announcement {
    header
    body
    publishedOn
    updatedAt
  }
`;
