import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useIsAuthorizedToFragment$key } from "__generated__/useIsAuthorizedToFragment.graphql";

export default function useIsAuthorizedTo(
  rawEntity: any,
  ...permissions: string[]
): boolean {
  const { allowedActions } = useFragment<useIsAuthorizedToFragment$key>(
    fragment,
    rawEntity
  );

  return permissions.every((permission) => allowedActions.includes(permission));
}

const fragment = graphql`
  fragment useIsAuthorizedToFragment on Entity {
    allowedActions
  }
`;
