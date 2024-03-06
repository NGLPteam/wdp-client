import React, { Ref, useState } from "react";
import { Controller } from "react-hook-form";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";
import BaseTypeahead from "components/forms/BaseTypeahead";
import UserAvatar from "components/composed/user/UserAvatar";
import {
  UserTypeaheadQuery as Query,
  UserTypeaheadQuery$data as Response,
} from "__generated__/UserTypeaheadQuery.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";

type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;

const UserTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label, disabled, required }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const [q, setQ] = useState("a");

  const formatOptions = (data: Response) => {
    if (!data || !data.users?.edges?.length) return;

    const results = data.users.edges;
    const options = results.map(({ node }) => {
      return {
        label: node.name ?? "",
        value: node.id ?? "",
        node: (
          <span className="l-flex l-flex--align-center l-flex--gap-sm">
            <UserAvatar data={node} />
            {node.name}
          </span>
        ),
      };
    });
    return options;
  };

  const { t } = useTranslation();

  const debouncedOnChange = debounce((value) => setQ(value), 500);

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{ query: q }}>
      {({ data }) => {
        return (
          <Controller<T>
            name={name}
            control={control}
            rules={{
              validate: (value) => {
                return !!value || (t("forms.validation.contributor") as string);
              },
            }}
            render={({ field }) => (
              <BaseTypeahead
                label={label}
                options={data ? formatOptions(data) : []}
                onInputChange={debouncedOnChange}
                disabled={disabled}
                required={required}
                defaultValue={q}
                {...field}
              />
            )}
          />
        );
      }}
    </LazyLoadQueryWrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
}

export default UserTypeahead;

const query = graphql`
  query UserTypeaheadQuery($query: String!) {
    users(prefix: $query, page: 1, perPage: 50, order: NAME_ASCENDING) {
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
