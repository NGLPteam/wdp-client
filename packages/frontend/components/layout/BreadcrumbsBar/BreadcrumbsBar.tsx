"use client";

import { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Breadcrumbs, Button, Dropdown, Link } from "components/atomic";
import { getOrigin, getRouteByEntityType } from "helpers";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { BreadcrumbsBarFragment$key } from "@/relay/BreadcrumbsBarFragment.graphql";
import * as Styled from "./BreadcrumbsBar.styles";

export default function BreadCrumbsBar({ data }: Props) {
  const breadcrumbData = useMaybeFragment(fragment, data);

  const globalData = useGlobalStaticContext();

  const url = useMemo(() => {
    if (!breadcrumbData) return null;

    const { slug, __typename: type } = breadcrumbData;

    const origin = getOrigin();

    const route = getRouteByEntityType(type);

    if (!route || !origin || !slug) return null;

    return `${origin}/${route}/${slug}`;
  }, [breadcrumbData]);

  const installation =
    globalData?.globalConfiguration?.site?.installationName || "WDP";

  return breadcrumbData ? (
    <Styled.Nav className="a-bg-custom10">
      <Styled.NavInner className="l-container-wide">
        <Breadcrumbs data={breadcrumbData} />
        <Dropdown
          label="Share"
          disclosure={
            <Button as="div" size="sm" icon="share" secondary>
              Share
            </Button>
          }
          menuItems={[
            <a
              key="fb"
              className=""
              href={`mailto:?subject=${breadcrumbData.title} - ${installation}&body=View ${breadcrumbData.title} published on ${installation}.%0d%0a%0d%0a${url}`}
            >
              <Link as="span" icon="email" iconLeft>
                Email
              </Link>
            </a>,
            <a
              key="fb"
              className=""
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            >
              <Link as="span" icon="facebook" iconLeft>
                Facebook
              </Link>
            </a>,
            <a
              key="twitter"
              className=""
              href={`https://twitter.com/share?text=&url=${url}`}
            >
              <Link as="span" icon="twitter" iconLeft>
                Twitter
              </Link>
            </a>,
          ]}
        />
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

interface Props {
  data?: BreadcrumbsBarFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbsBarFragment on Entity {
    __typename
    title
    ... on Sluggable {
      slug
    }
    ...BreadcrumbsFragment
  }
`;
