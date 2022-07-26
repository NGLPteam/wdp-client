import { useCallback } from "react";
import { useMutation } from "relay-hooks";
import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "react-relay";
import { useNotify } from "hooks";

import type { useResetOrderingFragment$key } from "@/relay/useResetOrderingFragment.graphql";
import { ResetOrderingInput } from "types/graphql-schema";
import { useResetOrderingMutation } from "@/relay/useResetOrderingMutation.graphql";

export function useResetOrdering() {
  const notify = useNotify();
  const { t } = useTranslation();

  const handleResponse = useCallback(
    (data: useResetOrderingFragment$key | null, name: string) => {
      if (!data) return;
      const results = readInlineData<useResetOrderingFragment$key>(
        fragment,
        data
      );

      if (results.disabled) {
        notify.success(t("messages.disable.success", { name }));
      } else if (results.destroyed) {
        notify.success(t("messages.delete.success", { name }));
      } else if (results.globalErrors && results.globalErrors.length > 0) {
        notify.mutationGlobalError(results.globalErrors);
      }
    },
    [notify, t]
  );

  /* Reset an ordering */
  const [commitResetOrdering] = useMutation<useResetOrderingMutation>(
    resetOrderingMutation
  );

  const reset = useCallback(
    async (input: ResetOrderingInput, label: string) => {
      const response = await commitResetOrdering({
        variables: { input },
      });
      return handleResponse(response.resetOrdering, label);
    },
    [commitResetOrdering, handleResponse]
  );

  return reset;
}
export default useResetOrdering;

const resetOrderingMutation = graphql`
  mutation useResetOrderingMutation($input: ResetOrderingInput!) {
    resetOrdering(input: $input) {
      ...useResetOrderingFragment
    }
  }
`;

const fragment = graphql`
  fragment useResetOrderingFragment on StandardMutationPayload @inline {
    ... on DestroyMutationPayload {
      destroyed
      globalErrors {
        message
        type
      }
    }
    ... on RevokeAccessPayload {
      revoked
      globalErrors {
        message
        type
      }
    }
    ... on DestroyOrderingPayload {
      disabled
      globalErrors {
        message
        type
      }
    }
  }
`;
