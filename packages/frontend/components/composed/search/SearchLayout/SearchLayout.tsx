import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import SearchBar from "../SearchBar";
import * as Styled from "./SearchLayout.styles";

export default function SearchLayout() {
  const router = useRouter();

  const { t } = useTranslation();

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <Styled.Search>
          <SearchBar id="searchPageInput" defaultValue={router.query.q} />
        </Styled.Search>
        <Styled.Sidebar>
          <Styled.SidebarGroup>
            <Styled.SidebarHeader>
              {t("search.sort_results_header")}
            </Styled.SidebarHeader>
          </Styled.SidebarGroup>
          <Styled.SidebarGroup>
            <Styled.SidebarHeader>
              {t("search.filter_results_header")}
            </Styled.SidebarHeader>
          </Styled.SidebarGroup>
        </Styled.Sidebar>
        <Styled.Results>
          <Styled.ResultsHeader>
            <Trans
              i18nKey="search.count_results_for_name"
              values={{
                count: 0,
                name: router.query.q,
              }}
              components={[
                <span key="text" className="t-copy-light"></span>,
                <em key="name"></em>,
              ]}
            />
          </Styled.ResultsHeader>
          <Styled.ResultsList>
            <Styled.ResultsListItem></Styled.ResultsListItem>
          </Styled.ResultsList>
        </Styled.Results>
      </Styled.Inner>
    </section>
  );
}
