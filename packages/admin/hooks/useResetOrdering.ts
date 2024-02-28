import { useCallback } from "react";
import { useMutation } from "relay-hooks";
import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "relay-runtime";
import { useNotify, usePageContext } from "hooks";

import { ResetOrderingInput } from "types/graphql-schema";
import type { useResetOrderingFragment$key } from "@/relay/useResetOrderingFragment.graphql";
import { useResetOrderingMutation } from "@/relay/useResetOrderingMutation.graphql";

export function useResetOrdering() {
  const notify = useNotify();
  const { t } = useTranslation();
  const { setTriggeredRefetchTags } = usePageContext();

  const handleResponse = useCallback(
    (
      data: useResetOrderingFragment$key | null | undefined,
      name: string,
      refetchTags: string[],
    ) => {
      if (!data) return;
      const results = readInlineData<useResetOrderingFragment$key>(
        fragment,
        data,
      );

      if (results.globalErrors && results.globalErrors.length > 0) {
        notify.mutationGlobalError(results.globalErrors);
      } else if (results) {
        notify.success(t("messages.enable.success", { name }));
        setTriggeredRefetchTags(refetchTags);
      }
    },
    [notify, setTriggeredRefetchTags, t],
  );

  /* Reset an ordering */
  const [commitResetOrdering] = useMutation<useResetOrderingMutation>(
    resetOrderingMutation,
  );

  const reset = useCallback(
    async (input: ResetOrderingInput, label: string, refetchTags: string[]) => {
      const response = await commitResetOrdering({
        variables: { input },
      });
      return handleResponse(response.resetOrdering, label, refetchTags);
    },
    [commitResetOrdering, handleResponse],
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
