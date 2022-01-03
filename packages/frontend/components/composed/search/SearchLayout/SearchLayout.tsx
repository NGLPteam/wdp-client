import React from "react";
import { useRouter } from "next/router";
import { Trans } from "react-i18next";
import * as Styled from "./SearchLayout.styles";

export default function SearchLayout() {
  const router = useRouter();

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <h4>
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
        </h4>
      </Styled.Inner>
    </section>
  );
}
