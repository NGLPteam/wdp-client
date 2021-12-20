import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { IssuePageLayoutFragment$key } from "@/relay/IssuePageLayoutFragment.graphql";
import { ContentImage } from "components/atomic";

export default function IssuePageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <section className="t-rte">
      {page.heroImage && <ContentImage data={page.heroImage} />}
      <h3>{page.title}</h3>
      <ReactMarkdown>{page.body}</ReactMarkdown>
    </section>
  ) : null;
}

interface Props {
  /* Item data */
  data?: IssuePageLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssuePageLayoutFragment on Page {
    title
    body
    heroImage {
      ...ContentImageFragment
    }
  }
`;
