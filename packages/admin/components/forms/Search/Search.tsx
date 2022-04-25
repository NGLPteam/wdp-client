import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as Styled from "./Search.styles";
import { useDrawerHelper } from "hooks";
import type { Drawers } from "hooks/useDrawerHelper";
import { IconFactory } from "components/factories";
import { RouteHelper } from "routes";

function Search({ className, routeName, filterDrawer, darkTheme }: Props) {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const { t } = useTranslation();

  const drawerHelper = useDrawerHelper();

  const route = routeName ? RouteHelper.findRouteByName(routeName) : null;

  const defaultValue = router.query?.q || "";

  const onSubmit = (data: Record<string, string>) => {
    router.push({
      pathname: route?.path || router.pathname,
      query: { ...router.query, q: data.q },
    });
  };

  const onClick = () => {
    if (filterDrawer) drawerHelper.open(filterDrawer);
  };

  return (
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
          <Styled.FiltersButton type="button" onClick={onClick}>
            <IconFactory icon="settings" title="Search Options" />
          </Styled.FiltersButton>
        )}
      </Styled.SearchWrapper>
    </form>
  );
}

interface Props {
  className?: string;
  routeName?: string;
  filterDrawer?: Drawers;
  darkTheme?: boolean;
}

export default Search;
