import React from "react";
import { useRouter } from "next/router";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import SearchBar from "../SearchBar";
import * as Styled from "./SearchLayout.styles";
import SearchLayoutResultsHeader from "./SearchLayoutResultsHeader";
import SearchLayoutFilters from "./SearchLayoutFilters";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";
import { Button } from "components/atomic";
import BaseDrawer from "components/layout/BaseDrawer";

export default function SearchLayout({ data }: Props) {
  const router = useRouter();

  const entity = useMaybeFragment<SearchLayoutFragment$key>(fragment, data);

  const dialog = useDialogState({ animated: true });

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <Styled.Search>
          <SearchBar id="searchPageInput" defaultValue={router.query.q} />
        </Styled.Search>
        <Styled.FiltersToggle>
          <DialogDisclosure
            as={Button}
            {...dialog}
            size="sm"
            icon="hamburger"
            secondary
          >
            Show Filters
          </DialogDisclosure>
        </Styled.FiltersToggle>
        <Styled.Sidebar>
          <SearchLayoutFilters data={entity} />
        </Styled.Sidebar>
        <Styled.Results>
          <SearchLayoutResultsHeader query={router.query.q} />
          <Styled.ResultsList>
            <Styled.ResultsListItem></Styled.ResultsListItem>
          </Styled.ResultsList>
        </Styled.Results>
      </Styled.Inner>

      <BaseDrawer label="Filters" dialog={dialog}>
        <SearchLayoutFilters data={entity} />
      </BaseDrawer>
    </section>
  );
}

interface Props {
  data?: SearchLayoutFragment$key | null;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Entity {
    ...SearchLayoutFiltersFragment
  }
`;
