import { graphql, readInlineData } from "relay-runtime";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import BreadcrumbsBar from "components/layout/BreadcrumbsBar";
import RelatedIssues from "components/composed/issue/RelatedIssues";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";
import IssueHero from "../IssueHero";

export default function IssueLayout({ data, children }: Props) {
  const issue = readInlineData(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={issue} />
      <IssueHero data={issue} />
      {children}
      {issue && issue?.contributions?.pageInfo?.totalCount > 0 ? (
        <ContributionsBlock data={issue?.contributions} />
      ) : null}
      <RelatedIssues data={issue?.relatedCollections} />
    </>
  );
}

interface Props {
  data: IssueLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssueLayoutFragment on Collection @inline {
    ...BreadcrumbsBarFragment
    ...IssueHeroFragment
    contributions {
      ...ContributionsBlockFragment
      pageInfo {
        totalCount
      }
    }
    relatedCollections(page: 1, perPage: 4) {
      ...RelatedIssuesFragment
    }
  }
`;
