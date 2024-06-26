import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { NamedLink, CoverImage } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { RelatedJournalFragment$key } from "@/relay/RelatedJournalFragment.graphql";
import * as Styled from "./RelatedJournal.styles";

export default function RelatedJournal({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const route = getRouteByEntityType(journal?.__typename);

  return journal ? (
    <NamedLink href={route ? `/${route}/${journal.slug}` : "/home"}>
      <Styled.Item>
        <Styled.ItemCover>
          <CoverImage
            title={journal.title}
            id={journal.id}
            data={journal.thumbnail}
            maxWidth={186}
            maxHeight={280}
          />
        </Styled.ItemCover>
        <Styled.ItemText>
          <h4>
            <Styled.LinkText>{journal.title}</Styled.LinkText>
          </h4>
          {journal.subtitle && (
            <Styled.ItemSubheader as="h5">
              <Styled.LinkText>{journal.subtitle}</Styled.LinkText>
            </Styled.ItemSubheader>
          )}
          <Styled.ItemMetadata className="t-copy-sm a-color-lighter">
            {journal.issues.pageInfo ? (
              <div>
                {t("counts.journal_issue", {
                  count: journal.issues.pageInfo.totalCount,
                })}
              </div>
            ) : null}
            {journal.updatedAt && (
              <div>
                {t("common.last_updated", {
                  value: formatDate(journal.updatedAt, "L/d/yy"),
                })}
              </div>
            )}
          </Styled.ItemMetadata>
        </Styled.ItemText>
      </Styled.Item>
    </NamedLink>
  ) : null;
}

interface Props {
  data?: RelatedJournalFragment$key | null;
}

const fragment = graphql`
  fragment RelatedJournalFragment on Collection {
    __typename
    id
    title
    subtitle
    slug
    updatedAt
    thumbnail {
      storage
      ...CoverImageFragment
    }
    issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
      pageInfo {
        totalCount
      }
    }
  }
`;
