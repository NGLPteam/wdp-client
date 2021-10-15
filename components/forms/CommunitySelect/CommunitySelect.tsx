import React, { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import {
  CommunitySelectFragment$data,
  CommunitySelectFragment$key,
} from "@/relay/CommunitySelectFragment.graphql";
import { useMaybeFragment } from "hooks";
type SelectProps = React.ComponentProps<typeof Select>;

const CommunitySelect = forwardRef(
  (
    { data, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const optionsData = useMaybeFragment(fragment, data);

    const options = useMemo(() => {
      return optionsData?.communities.edges.map(({ node }: Node) => {
        return {
          label: node.name || "",
          value: node.id,
        };
      });
    }, [optionsData]);

    return options ? (
      <Select
        label={label}
        options={options}
        disabled={disabled}
        ref={ref}
        {...inputProps}
      />
    ) : null;
  }
);

interface Props extends Omit<SelectProps, "options"> {
  data?: CommunitySelectFragment$key | null;
}

type Node = CommunitySelectFragment$data["communities"]["edges"][number];

export default CommunitySelect;

const fragment = graphql`
  fragment CommunitySelectFragment on Query {
    communities {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
