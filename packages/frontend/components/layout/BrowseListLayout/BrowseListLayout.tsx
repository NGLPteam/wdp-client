"use client";

import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PageCount, Pagination } from "components/atomic";
import { BrowseListLayoutFragment$key } from "@/relay/BrowseListLayoutFragment.graphql";
import NoContent from "../NoContent";
import * as Styled from "./BrowseListLayout.styles";

export default function BrowseListLayout({
  data,
  header: headerProp,
  orderComponent,
  items,
}: Props) {
  const pageInfo = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const header =
    headerProp &&
    (Array.isArray(headerProp)
      ? t(headerProp[0], headerProp[1])
      : t(headerProp));

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
          <NoContent />
        )}
        <Styled.Footer>
          <Pagination data={pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

type key = string;
type args = Record<string, string | number>;

interface Props {
  header?: string | [key, args] | null;
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
