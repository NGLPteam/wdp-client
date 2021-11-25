import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./BreadcrumbsBar.styles";
import { BreadcrumbsBarFragment$key } from "@/relay/BreadcrumbsBarFragment.graphql";
import { Breadcrumbs } from "components/atomic";

export default function BreadCrumbsBar({ data }: Props) {
  const breadcrumbData = useMaybeFragment(fragment, data);

  return (
    <Styled.Nav className="a-bg-custom10">
      <Styled.NavInner className="l-container-wide">
        <Breadcrumbs data={breadcrumbData} />
      </Styled.NavInner>
    </Styled.Nav>
  );
}

interface Props {
  data?: BreadcrumbsBarFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbsBarFragment on Entity {
    ...BreadcrumbsFragment
  }
`;
