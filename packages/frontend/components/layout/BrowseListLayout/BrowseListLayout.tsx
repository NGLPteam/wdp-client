import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./BrowseListLayout.styles";
import { PageCount, Pagination } from "components/atomic";
import { BrowseListLayoutFragment$key } from "@/relay/BrowseListLayoutFragment.graphql";

export default function BrowseListLayout({
  data,
  header,
  orderComponent,
  items,
}: Props) {
  const pageInfo = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

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
        {items && items.length > 0 ? (
          <ul className="t-unstyled-list">
            {items.map((item, i) => (
              <Styled.Item key={i}>{item}</Styled.Item>
            ))}
          </ul>
        ) : (
          <div>{t("list.no_results_message")}</div>
        )}
        <Styled.Footer>
          <Pagination data={pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

interface Props {
  header?: string | null;
  data?: BrowseListLayoutFragment$key | null;
  orderComponent?: React.ReactNode;
  items?: React.ReactNode[];
}

const fragment = graphql`
  fragment BrowseListLayoutFragment on PageInfo {
    ...PaginationFragment
    ...PageCountFragment
  }
`;
