import React, { Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import {
  RoleSelectFragment$data,
  RoleSelectFragment$key,
} from "@/relay/RoleSelectFragment.graphql";
import { useMaybeFragment } from "hooks";
type SelectProps = React.ComponentProps<typeof Select>;

const RoleSelect = (
  { data, label, disabled, ...inputProps }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLSelectElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    return optionsData?.roles.edges.map(({ node }: UserNode) => {
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
      {...inputProps}
    />
  ) : null;
};

interface Props extends Omit<SelectProps, "options"> {
  data?: RoleSelectFragment$key | null;
}

type UserNode = RoleSelectFragment$data["roles"]["edges"][number];

export default RoleSelect;

const fragment = graphql`
  fragment RoleSelectFragment on Query {
    roles {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
