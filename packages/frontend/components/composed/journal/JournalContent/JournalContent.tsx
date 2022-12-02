import React, { Suspense } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import FeaturedIssue from "../FeaturedIssue";
import * as Styled from "./JournalContent.styles";
import { FullText, Markdown } from "components/atomic";
import RecentIssues from "components/composed/issue/RecentIssues";
import { JournalContentFragment$key } from "@/relay/JournalContentFragment.graphql";
import EntityAnnouncements from "components/composed/entity/EntityAnnouncements";

export default function JournalContent({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const journal = useMaybeFragment(fragment, data);

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
                  <Markdown.Base className="t-rte">
                    {journal.about.content}
                  </Markdown.Base>
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
      <Suspense fallback={<></>}>
        <FeaturedIssue
          data={journal.currentIssue}
          header="layouts.current_issue"
        />
      </Suspense>
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
