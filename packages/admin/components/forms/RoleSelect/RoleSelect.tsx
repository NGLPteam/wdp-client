import React, { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import Select from "components/forms/Select";

import {
  RoleSelectFragment$data,
  RoleSelectFragment$key,
} from "@/relay/RoleSelectFragment.graphql";
import { useMaybeFragment } from "hooks";
type SelectProps = React.ComponentProps<typeof Select>;

const RoleSelect = forwardRef(
  (
    { data, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const optionsData = useMaybeFragment(fragment, data);

    const options = useMemo(() => {
      return (
        optionsData?.assignableRoles?.map(({ name, id }: Node) => {
          return {
            label: name || "",
            value: id,
          };
        }) || []
      );
    }, [optionsData]);

    return (
      <Select
        label={label}
        options={options}
        disabled={disabled}
        ref={ref}
        {...inputProps}
      />
    );
  }
);

interface Props extends Omit<SelectProps, "options"> {
  data?: RoleSelectFragment$key | null;
}

type Node = RoleSelectFragment$data["assignableRoles"][number];

export default RoleSelect;

const fragment = graphql`
  fragment RoleSelectFragment on Entity {
    assignableRoles {
      id
      name
    }
  }
`;
