import React from "react";
import { useRouter } from "next/router";
import { graphql } from "react-relay";
import { useForm } from "react-hook-form";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import SearchBar from "../SearchBar";
import * as Styled from "./SearchLayout.styles";
import SearchLayoutResultsHeader from "./SearchLayoutResultsHeader";
import SearchLayoutFilters from "./SearchLayoutFilters";
import BaseDrawer from "components/layout/BaseDrawer";
import { Button } from "components/atomic";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";

export default function SearchLayout({ data }: Props) {
  const router = useRouter();

  const slug = useRouteSlug();

  const entity = useMaybeFragment<SearchLayoutFragment$key>(fragment, data);

  const dialog = useDialogState({ animated: true });

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: { q?: string }) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          q: data.q,
          slug,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <Styled.Search>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SearchBar
              id="searchPageInput"
              defaultValue={router.query.q}
              {...register("q")}
            />
          </form>
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
          {/* <Styled.ResultsList>
                <Styled.ResultsListItem key={i}>
                  <SearchResultFactory data={descendant} />
                </Styled.ResultsListItem>
            </Styled.ResultsList> */}
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
