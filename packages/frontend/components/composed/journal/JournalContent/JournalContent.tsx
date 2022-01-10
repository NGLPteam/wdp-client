import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import CurrentIssue from "../CurrentIssue";
import * as Styled from "./JournalContent.styles";
import { ReadMoreLink, FullTextProperty } from "components/atomic";
import FeaturedIssues from "components/composed/issue/FeaturedIssues";
import { JournalContentFragment$key } from "@/relay/JournalContentFragment.graphql";

export default function JournalContent({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const announcements = [1, 2];

  if (!journal) return null;

  return (
    <>
      <section className="a-bg-custom10">
        <Styled.SectionInner className="l-container-wide">
          {journal.about?.fullText?.content && (
            <Styled.InfoBlock className="t-rte">
              <FullTextProperty data={journal.about} />
            </Styled.InfoBlock>
          )}
          {announcements && (
            <Styled.AnnouncementsBlock as="aside" className="a-bg-neutral00">
              <Styled.AnnouncementsHeader>
                {t("layouts.announcements_header")}
              </Styled.AnnouncementsHeader>
              <ul className="t-unstyled-list">
                {announcements.map((i) => (
                  <Styled.AnnouncementItem key={i}>
                    <h5 className="t-copy-medium">
                      <a href="#">Title of this Announcement</a>
                    </h5>
                    <Styled.AnnouncementBody className="t-rte">
                      <p>
                        Massa convallis diam ac facilisis quisque sit enim et.
                        Viverra est ornare porta justo sapien.
                      </p>
                    </Styled.AnnouncementBody>
                    <ReadMoreLink className="t-label-mix" />
                  </Styled.AnnouncementItem>
                ))}
              </ul>
            </Styled.AnnouncementsBlock>
          )}
        </Styled.SectionInner>
      </section>
      <CurrentIssue data={journal.currentIssue} />
      <FeaturedIssues data={journal.issues} />
    </>
  );
}

interface Props {
  data?: JournalContentFragment$key | null;
}

const fragment = graphql`
  fragment JournalContentFragment on Collection {
    title

    about: schemaProperty(fullPath: "description") {
      ... on FullTextProperty {
        fullText {
          content
        }
      }
      ...FullTextPropertyFragment
    }

    issues: collections(
      schema: "nglp:journal_issue"
      order: PUBLISHED_ASCENDING
      nodeFilter: DESCENDANTS
      page: 1
      perPage: 4
    ) {
      ...FeaturedIssuesFragment
    }

    currentIssue: firstCollection(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
    ) {
      ...CurrentIssueFragment
    }
  }
`;
