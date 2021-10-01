import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import Typeahead from "components/forms/Typeahead";

import type { FieldValues, Control, Path } from "react-hook-form";
import {
  UserTypeaheadFragment$data,
  UserTypeaheadFragment$key,
} from "@/relay/UserTypeaheadFragment.graphql";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const UserTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    return optionsData?.users.edges.map(({ node }: UserNode) => {
      return {
        label: node.name || "",
        value: node.id,
      };
    });
  }, [optionsData]);

  return options ? (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
          {...field}
        />
      )}
    />
  ) : null;
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  data?: UserTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type UserNode = UserTypeaheadFragment$data["users"]["edges"][number];

export default UserTypeahead;

const fragment = graphql`
  fragment UserTypeaheadFragment on Query {
    users {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
