import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { graphql } from "react-relay";
import SearchFilterDrawer from "../SearchFilterDrawer";
import * as Styled from "./Search.styles";
import { RouteHelper } from "routes";
import { useMaybeFragment } from "hooks";
import type { Drawers } from "hooks/useDrawerHelper";
import { IconFactory } from "components/factories";
import { SearchFragment$key } from "@/relay/SearchFragment.graphql";

function Search({
  data,
  className,
  routeName,
  filterDrawer,
  darkTheme,
}: Props) {
  const searchScope = useMaybeFragment(fragment, data);

  const dialog = useDialogState({ animated: true });

  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const { t } = useTranslation();

  const route = routeName ? RouteHelper.findRouteByName(routeName) : null;

  const defaultValue = router.query?.q || "";

  const onSubmit = (data: Record<string, string>) => {
    router.push({
      pathname: route?.path || router.pathname,
      query: { ...router.query, q: data.q },
    });
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        <Styled.SearchWrapper $darkTheme={darkTheme}>
          <Styled.SearchIcon icon="search" className={`${className}__icon`} />
          <Styled.SearchInput
            placeholder={t("common.search")}
            defaultValue={defaultValue}
            {...register("q")}
          />
          <button className="a-hidden" type="submit">
            {t("search.submit")}
          </button>
          {filterDrawer && (
            <DialogDisclosure as={Styled.FiltersButton} {...dialog}>
              <IconFactory icon="settings" title="Search Options" />
            </DialogDisclosure>
          )}
        </Styled.SearchWrapper>
      </form>
      <SearchFilterDrawer dialog={dialog} data={searchScope} />
    </>
  );
}

interface Props {
  data?: SearchFragment$key | null;
  className?: string;
  routeName?: string;
  filterDrawer?: Drawers;
  darkTheme?: boolean;
}

export default Search;

const fragment = graphql`
  fragment SearchFragment on SearchScope {
    ...SearchFilterDrawerFragment
  }
`;
