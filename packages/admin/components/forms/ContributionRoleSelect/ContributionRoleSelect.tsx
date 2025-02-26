import { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import Select from "components/forms/Select";
import { ContributionRoleSelectQuery as Query } from "@/relay/ContributionRoleSelectQuery.graphql";
import type { ControlledVocabularyItemSet } from "types/controlled-vocabulary-item-sets";

type SelectProps = React.ComponentProps<typeof Select>;

const RoleSelect = forwardRef(
  (
    { id, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const { contributionRoles } = useAuthenticatedQuery<Query>(query, { id });

    const options = useMemo(() => {
      return (
        contributionRoles.controlledVocabulary
          .itemSet as ControlledVocabularyItemSet
      )
        .filter((role) => !role.unselectable)
        .map(({ label, id }) => {
          return {
            label,
            value: id,
          };
        });
    }, [contributionRoles]);

    return (
      <Select
        label={label}
        options={options}
        disabled={disabled}
        ref={ref}
        {...inputProps}
      />
    );
  },
);

interface Props extends Omit<SelectProps, "options"> {
  id?: string;
}

export default RoleSelect;

const query = graphql`
  query ContributionRoleSelectQuery($id: ID) {
    contributionRoles(contributableId: $id) {
      controlledVocabulary {
        itemSet
      }
    }
  }
`;
