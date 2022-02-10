import React from "react";
import { useRouter } from "next/router";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SearchBar from "../SearchBar";
import * as Styled from "./SearchLayout.styles";
import SearchLayoutSort from "./SearchLayoutSort";
import SearchLayoutFilter from "./SearchLayoutFilter";
import SearchLayoutResultsHeader from "./SearchLayoutResultsHeader";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";

export default function SearchLayout({ data }: Props) {
  const router = useRouter();

  const entity = useMaybeFragment<SearchLayoutFragment$key>(fragment, data);

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <Styled.Search>
          <SearchBar id="searchPageInput" defaultValue={router.query.q} />
        </Styled.Search>
        <Styled.Sidebar>
          <SearchLayoutSort />
          {entity && <SearchLayoutFilter data={entity} />}
        </Styled.Sidebar>
        <Styled.Results>
          <SearchLayoutResultsHeader query={router.query.q} />
          <Styled.ResultsList>
            <Styled.ResultsListItem></Styled.ResultsListItem>
          </Styled.ResultsList>
        </Styled.Results>
      </Styled.Inner>
    </section>
  );
}

interface Props {
  data?: SearchLayoutFragment$key | null;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Entity {
    ...SearchLayoutFilterFragment
  }
`;
