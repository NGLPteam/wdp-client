import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import NoContent from "../NoContent";
import * as Styled from "./BrowseTreeLayout.styles";
import { PageCount, Pagination } from "components/atomic";
import { BrowseTreeLayoutFragment$key } from "@/relay/BrowseTreeLayoutFragment.graphql";

export default function BrowseTreeLayout({
  data,
  header,
  orderComponent,
  items,
}: Props) {
  const pageInfo = useMaybeFragment(fragment, data);

  return pageInfo ? (
    <section className="a-bg-neutral00">
      <div className="l-container-wide">
        <Styled.Header>
          {header && <h3 className="t-capitalize">{header}</h3>}
          <Styled.PageCountBar>
            <PageCount data={pageInfo} className="t-label-lg" />
            {orderComponent}
          </Styled.PageCountBar>
        </Styled.Header>
        {items && items.length > 0 ? items : <NoContent />}
        <Styled.Footer>
          <Pagination data={pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

interface Props {
  header?: string | null;
  data?: BrowseTreeLayoutFragment$key | null;
  orderComponent?: React.ReactNode;
  items?: React.ReactNode[];
}

const fragment = graphql`
  fragment BrowseTreeLayoutFragment on PageInfo {
    ...PaginationFragment
    ...PageCountFragment
  }
`;
