import React from "react";
import { Trans } from "react-i18next";
import * as Styled from "./SearchLayout.styles";

export default function SearchLayoutResultsHeader({ query }: Props) {
  return (
    <Styled.ResultsHeader>
      <Trans
        i18nKey="search.count_results_for_name"
        values={{
          count: 0,
          name: query,
        }}
        components={[
          <span key="text" className="t-copy-light"></span>,
          <em key="name"></em>,
        ]}
      />
    </Styled.ResultsHeader>
  );
}

interface Props {
  query?: string | string[];
}
