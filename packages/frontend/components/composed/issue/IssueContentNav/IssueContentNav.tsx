import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import IssueNavList from "./IssueNavList";
import * as Styled from "./IssueContentNav.styles";
import EntityOrderSelect from "components/composed/entity/EntityOrderSelect";
import { IssueContentNavFragment$key } from "@/relay/IssueContentNavFragment.graphql";
import { BackToTopBlock } from "components/layout";

export default function IssueContentNav({ data, children }: Props) {
  const content = useMaybeFragment(fragment, data);
  const router = useRouter();
  const order = useMemo(() => {
    return routeQueryArrayToString(router.query.order);
  }, [router.query]);

  function handleOrderChange(value: string) {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, order: value },
    });
  }

  return (
    <section className="a-bg-neutral00">
      <Styled.SectionWrapper as={BackToTopBlock} className="l-container-wide">
        <Styled.SectionInner>
          <Styled.LeftSide>{children}</Styled.LeftSide>
          <Styled.RightSide as="nav">
            {/* TODO: Fix router context, use context to get current route name */}
            {router.pathname === "/collections/[slug]" && (
              <EntityOrderSelect
                data={content?.orderings}
                onChange={handleOrderChange}
                defaultValue={order}
              />
            )}
            <IssueNavList data={content} />
          </Styled.RightSide>
        </Styled.SectionInner>
      </Styled.SectionWrapper>
    </section>
  );
}

interface Props {
  data?: IssueContentNavFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssueContentNavFragment on Collection {
    orderings {
      ...EntityOrderSelectFragment
    }
    ...IssueNavListFragment
  }
`;
