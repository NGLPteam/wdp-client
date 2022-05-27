import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import type { FieldValues, Control, Path } from "react-hook-form";
import Typeahead from "components/forms/Typeahead";

import {
  UserTypeaheadFragment$data,
  UserTypeaheadFragment$key,
} from "@/relay/UserTypeaheadFragment.graphql";
import { useMaybeFragment } from "hooks";
import UserAvatar from "components/composed/user/UserAvatar";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const UserTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled, required }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    return optionsData?.users.edges.map(({ node }: UserNode) => {
      return {
        label: node.name || "",
        value: node.id,
        node: (
          <span className="l-flex l-flex--align-center l-flex--gap-sm">
            <UserAvatar data={node} />
            {node.name}
          </span>
        ),
      };
    });
  }, [optionsData]);

  return options ? (
    <Controller<T>
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          return (
            !!value ||
            "Please select a user. If the user is not listed, you may need to create the user first."
          );
        },
      }}
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
          required={required}
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
          ...UserAvatarFragment
        }
      }
    }
  }
`;
