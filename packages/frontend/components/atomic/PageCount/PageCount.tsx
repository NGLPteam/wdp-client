import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Trans } from "react-i18next";
import { PageCountFragment$key } from "@/relay/PageCountFragment.graphql";

export default function PageCount({ data, length, className, name }: Props) {
  const pageData = useMaybeFragment(fragment, data);

  return pageData && length ? (
    <div className={className}>
      <Trans
        i18nKey="common.showing_count_out_of_total_name"
        values={{
          count: length,
          total: pageData.totalCount,
          name,
        }}
        components={[<span key="text" className="t-copy-lighter"></span>]}
      />
    </div>
  ) : null;
}

interface Props {
  data?: PageCountFragment$key | null;
  length?: number;
  className?: string;
  name?: string;
}

const fragment = graphql`
  fragment PageCountFragment on PageInfo {
    totalCount
  }
`;
