import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DOIFragment$key } from "@/relay/DOIFragment.graphql";

export default function DOI({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity?.doi ? (
    <div>
      <a target="_blank" rel="noreferrer" href={entity.doi} className="a-link">
        {entity.doi}
      </a>
    </div>
  ) : null;
}

interface Props {
  data?: DOIFragment$key | null;
}

const fragment = graphql`
  fragment DOIFragment on HasDOI {
    doi
  }
`;
