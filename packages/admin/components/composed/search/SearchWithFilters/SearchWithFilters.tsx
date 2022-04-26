import React from "react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { graphql } from "react-relay";
import SearchFilterDrawer from "../SearchFilterDrawer";
import Search from "../Search/Search";
import * as Styled from "./SearchWithFilters.styles";
import { useMaybeFragment } from "hooks";
import { IconFactory } from "components/factories";
import { SearchWithFiltersFragment$key } from "@/relay/SearchWithFiltersFragment.graphql";

type SearchProps = React.ComponentProps<typeof Search>;

function SearchWithFilters({ data, className, routeName, darkTheme }: Props) {
  const searchScope = useMaybeFragment(fragment, data);

  const dialog = useDialogState({ animated: true });

  return (
    <>
      <Search
        darkTheme={darkTheme}
        className={className}
        routeName={routeName}
        filtersButton={
          <DialogDisclosure as={Styled.FiltersButton} {...dialog}>
            <IconFactory icon="settings" title="Search Options" />
          </DialogDisclosure>
        }
      />
      <SearchFilterDrawer dialog={dialog} data={searchScope} />
    </>
  );
}

interface Props extends SearchProps {
  data?: SearchWithFiltersFragment$key | null;
}

export default SearchWithFilters;

const fragment = graphql`
  fragment SearchWithFiltersFragment on SearchScope {
    ...SearchFilterDrawerFragment
  }
`;
