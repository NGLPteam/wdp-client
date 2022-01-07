import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Trans } from "react-i18next";
import { PageCountFragment$key } from "@/relay/PageCountFragment.graphql";

export default function PageCount({ data, className, name }: Props) {
  const pageData = useMaybeFragment(fragment, data);

  if (!pageData) return null;

  const { totalCount, page = 1, perPage } = pageData;

  const start = totalCount > 0 ? (page - 1) * perPage + 1 : 0;
  const end =
    totalCount < perPage || page * perPage > totalCount
      ? totalCount
      : page * perPage;

  return (
    <div className={className}>
      <Trans
        i18nKey="common.showing_count_out_of_total"
        values={{
          start,
          end,
          total: totalCount,
          name,
        }}
        components={[<span key="text" className="t-copy-lighter"></span>]}
      />
    </div>
  );
}

interface Props {
  data?: PageCountFragment$key | null;
  className?: string;
  name?: string;
}

const fragment = graphql`
  fragment PageCountFragment on PageInfo {
    totalCount
    page
    perPage
  }
`;
