import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Breadcrumbs, Button, Dropdown, Link } from "components/atomic";
import { getOrigin, getRouteByEntityType } from "helpers";
import { RouteHelper } from "routes";
import { useGlobalContext } from "contexts";
import { BreadcrumbsBarFragment$key } from "@/relay/BreadcrumbsBarFragment.graphql";
import { BreadcrumbsBarGlobalFragment$key } from "@/relay/BreadcrumbsBarGlobalFragment.graphql";
import * as Styled from "./BreadcrumbsBar.styles";

export default function BreadCrumbsBar({ data }: Props) {
  const breadcrumbData = useMaybeFragment(fragment, data);

  const globalData = useGlobalContext();

  const global = useMaybeFragment<BreadcrumbsBarGlobalFragment$key>(
    globalFragment,
    globalData?.globalConfiguration,
  );

  const url = useMemo(() => {
    if (!breadcrumbData) return null;

    const { slug, __typename: type } = breadcrumbData;

    const origin = getOrigin();

    const routeName = getRouteByEntityType(type);

    if (!routeName || !origin || !slug) return null;

    const route = RouteHelper.findRouteByName(routeName);

    return `${origin}${route?.path.replace("[slug]", slug)}`;
  }, [breadcrumbData]);

  const installation = global?.site?.installationName || "WDP";

  return url && breadcrumbData ? (
    <Styled.Nav className="a-bg-custom10">
      <Styled.NavInner className="l-container-wide">
        <Breadcrumbs data={breadcrumbData} />
        <Dropdown
          label="Share"
          disclosure={
            <Button size="sm" icon="share" secondary>
              Share
            </Button>
          }
          menuItems={[
            <a
              key="fb"
              className=""
              href={`mailto:?subject=${breadcrumbData.title} - ${installation}&body=View ${breadcrumbData.title} published on ${installation}.%0d%0a%0d%0a${url}`}
            >
              <Link icon="email" iconLeft>
                Email
              </Link>
            </a>,
            <a
              key="fb"
              className=""
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            >
              <Link icon="facebook" iconLeft>
                Facebook
              </Link>
            </a>,
            <a
              key="twitter"
              className=""
              href={`https://twitter.com/share?text=&url=${url}`}
            >
              <Link icon="twitter" iconLeft>
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

const globalFragment = graphql`
  fragment BreadcrumbsBarGlobalFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
