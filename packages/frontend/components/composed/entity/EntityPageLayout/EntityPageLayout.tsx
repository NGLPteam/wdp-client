import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <div className="t-rte">
      <h3>{page.title}</h3>
      <div>{page.body}</div>
    </div>
  ) : null;
}

interface Props {
  /* Item data */
  data?: EntityPageLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityPageLayoutFragment on Page {
    title
    body
  }
`;
