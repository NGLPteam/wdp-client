import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import * as Styled from "./IssueContent.styles";
import EntityOrderSelect from "components/composed/entity/EntityOrderSelect";
import { IssueContentFragment$key } from "@/relay/IssueContentFragment.graphql";

export default function IssueContent({ data, children }: Props) {
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
    <Styled.Section className="a-bg-neutral00">
      <Styled.SectionInner className="l-container-wide">
        <Styled.LeftSide>{children}</Styled.LeftSide>
        <Styled.RightSide as="nav">
          <EntityOrderSelect
            data={content?.orderings}
            onChange={handleOrderChange}
            defaultValue={order}
          />
        </Styled.RightSide>
      </Styled.SectionInner>
    </Styled.Section>
  );
}

interface Props {
  data?: IssueContentFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssueContentFragment on Collection {
    orderings {
      ...EntityOrderSelectFragment
    }
  }
`;
