import Head from "next/head";
import { getPrecisionCitationDateDisplay } from "helpers";
import { getContributorDisplayName } from "components/composed/contributor/ContributorName/ContributorName";
import { getStaticGoogleScholarDataFragment$data } from "@/relay/getStaticGoogleScholarDataFragment.graphql";

export default function GoogleScholarHtmlHead({
  entity,
}: {
  entity: getStaticGoogleScholarDataFragment$data;
}) {
  const identifier = entity.schemaDefinition?.identifier;

  const volume = entity.volumeNumber?.value || entity.volume?.number?.value;

  const issue = entity.issueNumber?.value || entity.issue?.number?.value;

  const startPage = entity?.startPage?.value;

  const endPage = entity?.endPage?.value;

  const pdf = entity.pdf?.asset?.downloadUrl;

  const published = getPrecisionCitationDateDisplay(
    entity.published?.precision,
    entity.published?.value,
  );

  const journal = entity.journal?.title;

  const institution = entity.institution?.value || entity.community?.title;

  const authors =
    entity.contributions?.nodes?.filter(
      ({ role }: { role?: string | null }) => role === "author",
    ) || [];

  switch (identifier) {
    case "article":
    case "journal_article":
    case "dissertation":
    case "paper":
      return (
        <Head>
          <meta name="citation_title" content={entity.title} />
          {authors.map(({ contributor }, i) => (
            <meta
              key={i}
              name="citation_author"
              content={getContributorDisplayName(contributor, true)}
            />
          ))}
          {entity.issn && <meta name="citation_issn" content={entity.issn} />}
          {published && (
            <meta name="citation_publication_date" content={published} />
          )}
          {journal && <meta name="citation_journal_title" content={journal} />}
          {volume && <meta name="citation_volume" content={volume} />}
          {issue && issue !== "0" && (
            <meta name="citation_issue" content={issue} />
          )}
          {startPage && (
            <meta name="citation_firstpage" content={String(startPage)} />
          )}
          {endPage && (
            <meta name="citation_lastpage" content={String(endPage)} />
          )}
          {pdf && <meta name="citation_pdf_url" content={pdf} />}
          {institution && identifier === "dissertation" && (
            <meta
              name="citation_dissertation_institution"
              content={institution}
            />
          )}
        </Head>
      );

    default:
      return <></>;
  }
}
