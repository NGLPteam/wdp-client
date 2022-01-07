import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import IssueSidebarNavList from "./IssueSidebarNavList";
import * as Styled from "./IssueSidebarNav.styles";
import EntityOrderSelect from "components/composed/entity/EntityOrderSelect";
import { IssueSidebarNavFragment$key } from "@/relay/IssueSidebarNavFragment.graphql";
import { BackToTopBlock } from "components/layout";
import { RouteHelper } from "routes";

export default function IssueSidebarNav({ data, children }: Props) {
  const content = useMaybeFragment(fragment, data);

  const router = useRouter();

  const order = useMemo(() => {
    return routeQueryArrayToString(router.query.ordering);
  }, [router.query]);

  const orderRoute = RouteHelper.findRouteByName("collection.browse");

  function handleOrderChange(value: string) {
    if (!orderRoute) return;

    router.push({
      pathname: orderRoute.path,
      query: { ...router.query, ordering: value, page: 1 },
    });
  }

  return (
    <section className="a-bg-neutral00">
      <Styled.SectionWrapper as={BackToTopBlock} className="l-container-wide">
        <Styled.SectionInner>
          <Styled.LeftSide>{children}</Styled.LeftSide>
          <Styled.RightSide as="nav">
            <EntityOrderSelect
              data={content?.orderings}
              onChange={handleOrderChange}
              defaultValue={order || "articles"}
            />
            <IssueSidebarNavList data={content} />
          </Styled.RightSide>
        </Styled.SectionInner>
      </Styled.SectionWrapper>
    </section>
  );
}

interface Props {
  data?: IssueSidebarNavFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssueSidebarNavFragment on Collection {
    orderings {
      ...EntityOrderSelectFragment
    }
    ...IssueSidebarNavListFragment
  }
`;
