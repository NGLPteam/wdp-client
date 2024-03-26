"use client";

import { useMaybeFragment } from "@wdp/lib/api/hooks";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { FullText, Markdown, LoadingBlock } from "components/atomic";
import RecentIssues from "components/composed/issue/RecentIssues";
import EntityAnnouncements from "components/composed/entity/EntityAnnouncements";
import { JournalContentFragment$key } from "@/relay/JournalContentFragment.graphql";
import FeaturedIssue from "../FeaturedIssue";
import * as Styled from "./JournalContent.styles";

export default function JournalContent({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  const isMounted = useIsMounted();

  if (!journal) return null;

  const showInfoSection =
    !!journal.description?.fullText?.content ||
    !!journal.about?.content ||
    !!journal.announcements?.nodes?.length;

  return (
    <>
      {showInfoSection && (
        <section className="a-bg-custom10">
          <Styled.SectionInner className="l-container-wide">
            {journal.description?.fullText?.content ? (
              <Styled.InfoBlock className="t-rte">
                <FullText data={journal.description} />
              </Styled.InfoBlock>
            ) : (
              journal.about?.content && (
                <Styled.InfoBlock>
                  {isMounted ? (
                    <Markdown.Base className="t-rte" skipMountCheck>
                      {journal.about.content}
                    </Markdown.Base>
                  ) : (
                    <LoadingBlock className="t-rte" />
                  )}
                </Styled.InfoBlock>
              )
            )}
            {!!journal.announcements && (
              <Styled.AnnouncementsBlock>
                <EntityAnnouncements data={journal.announcements} />
              </Styled.AnnouncementsBlock>
            )}
          </Styled.SectionInner>
        </section>
      )}
      <FeaturedIssue
        data={journal.currentIssue}
        header="layouts.current_issue"
      />
      <RecentIssues data={journal.issues} />
    </>
  );
}

interface Props {
  data?: JournalContentFragment$key | null;
}

const fragment = graphql`
  fragment JournalContentFragment on Collection {
    slug

    description: schemaProperty(fullPath: "description") {
      ... on FullTextProperty {
        fullText {
          content
        }
      }
      ...FullTextFragment
    }

    about: schemaProperty(fullPath: "about") {
      ... on MarkdownProperty {
        content
      }
    }

    issues: collections(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
      page: 1
      perPage: 4
    ) {
      ...RecentIssuesFragment
    }

    currentIssue: firstCollection(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
    ) {
      ...FeaturedIssueFragment
    }

    announcements {
      ...EntityAnnouncementsFragment
      ... on AnnouncementConnection {
        nodes {
          slug
        }
      }
    }
  }
`;
