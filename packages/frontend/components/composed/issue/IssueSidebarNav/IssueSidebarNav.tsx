import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueSidebarNavList from "./IssueSidebarNavList";
import * as Styled from "./IssueSidebarNav.styles";
import EntityOrderSelect from "components/composed/entity/EntityOrderSelect";
import { IssueSidebarNavFragment$key } from "@/relay/IssueSidebarNavFragment.graphql";
import { BackToTopBlock } from "components/layout";

export default function IssueSidebarNav({ data, children }: Props) {
  const content = useMaybeFragment(fragment, data);

  return (
    <section className="a-bg-neutral00">
      <Styled.SectionWrapper as={BackToTopBlock} className="l-container-wide">
        <Styled.SectionInner>
          <Styled.LeftSide>{children}</Styled.LeftSide>
          <Styled.RightSide as="nav">
            <EntityOrderSelect data={content?.orderings} />
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
