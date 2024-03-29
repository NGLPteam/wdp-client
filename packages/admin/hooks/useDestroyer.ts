import { useCallback } from "react";
import { useMutation } from "relay-hooks";
import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "react-relay";
import { useNotify, usePageContext } from "hooks";
import type {
  DestroyCommunityInput,
  useDestroyerDestroyCommunityMutation,
} from "@/relay/useDestroyerDestroyCommunityMutation.graphql";
import type {
  DestroyContributorInput,
  useDestroyerDestroyContributorMutation,
} from "@/relay/useDestroyerDestroyContributorMutation.graphql";
import type {
  DestroyCollectionInput,
  useDestroyerDestroyCollectionMutation,
} from "@/relay/useDestroyerDestroyCollectionMutation.graphql";
import type {
  DestroyItemInput,
  useDestroyerDestroyItemMutation,
} from "@/relay/useDestroyerDestroyItemMutation.graphql";
import type {
  DestroyContributionInput,
  useDestroyerDestroyContributionMutation,
} from "@/relay/useDestroyerDestroyContributionMutation.graphql";
import type {
  DestroyOrderingInput,
  useDestroyerDestroyOrderingMutation,
} from "@/relay/useDestroyerDestroyOrderingMutation.graphql";
import type {
  DestroyEntityLinkInput,
  useDestroyerDestroyEntityLinkMutation,
} from "@/relay/useDestroyerDestroyEntityLinkMutation.graphql";
import type {
  DestroyPageInput,
  useDestroyerDestroyPageMutation,
} from "@/relay/useDestroyerDestroyPageMutation.graphql";
import type { useDestroyerFragment$key } from "@/relay/useDestroyerFragment.graphql";
import {
  DestroyAnnouncementInput,
  RevokeAccessInput,
} from "types/graphql-schema";
import { useDestroyerRevokeAccessMutation } from "@/relay/useDestroyerRevokeAccessMutation.graphql";
import {
  DestroyAssetInput,
  useDestroyerDestroyAssetMutation,
} from "@/relay/useDestroyerDestroyAssetMutation.graphql";
import { useDestroyerDestroyAnnouncementMutation } from "@/relay/useDestroyerDestroyAnnouncementMutation.graphql";

export function useDestroyer() {
  const notify = useNotify();
  const { t } = useTranslation();

  const { setTriggeredRefetchTags } = usePageContext();

  const handleResponse = useCallback(
    (
      data: useDestroyerFragment$key | null,
      name: string,
      refetchTags: string[]
    ) => {
      if (!data) return;
      const results = readInlineData<useDestroyerFragment$key>(
        destroyFragment,
        data
      );
      if (results.revoked) {
        notify.success(t("messages.revoke.success", { name }));
        setTriggeredRefetchTags(refetchTags);
      } else if (results.disabled) {
        notify.success(t("messages.disable.success", { name }));
        setTriggeredRefetchTags(refetchTags);
      } else if (results.destroyed) {
        notify.success(t("messages.delete.success", { name }));
        setTriggeredRefetchTags(refetchTags);
      } else if (results.globalErrors && results.globalErrors.length > 0) {
        notify.mutationGlobalError(results.globalErrors);
      }
    },
    [notify, t, setTriggeredRefetchTags]
  );

  /* Destroy a collection */
  const [commitDestroyCollection] =
    useMutation<useDestroyerDestroyCollectionMutation>(
      destroyCollectionMutation
    );

  const collection = useCallback(
    async (input: DestroyCollectionInput, label: string) => {
      const response = await commitDestroyCollection({ variables: { input } });
      return handleResponse(response.destroyCollection, label, ["collections"]);
    },
    [commitDestroyCollection, handleResponse]
  );

  /* Destroy a item */
  const [commitDestroyItem] =
    useMutation<useDestroyerDestroyItemMutation>(destroyItemMutation);

  const item = useCallback(
    async (input: DestroyItemInput, label: string) => {
      const response = await commitDestroyItem({ variables: { input } });
      return handleResponse(response.destroyItem, label, ["items"]);
    },
    [commitDestroyItem, handleResponse]
  );

  /* Destroy a contribution */
  const [commitDestroyContribution] =
    useMutation<useDestroyerDestroyContributionMutation>(
      destroyContributionMutation
    );

  const contribution = useCallback(
    async (input: DestroyContributionInput, label: string) => {
      const response = await commitDestroyContribution({
        variables: { input },
      });
      return handleResponse(response.destroyContribution, label, [
        "contributions",
      ]);
    },
    [commitDestroyContribution, handleResponse]
  );

  /* Destroy a community */
  const [commitDestroyCommunity] =
    useMutation<useDestroyerDestroyCommunityMutation>(destroyCommunityMutation);

  const community = useCallback(
    async (input: DestroyCommunityInput, label: string) => {
      const response = await commitDestroyCommunity({ variables: { input } });
      return handleResponse(response.destroyCommunity, label, ["communities"]);
    },
    [commitDestroyCommunity, handleResponse]
  );

  /* Destroy a contributor */
  const [commitDestroyContributor] =
    useMutation<useDestroyerDestroyContributorMutation>(
      destroyContributorMutation
    );

  const contributor = useCallback(
    async (input: DestroyContributorInput, label: string) => {
      const response = await commitDestroyContributor({ variables: { input } });
      return handleResponse(response.destroyContributor, label, [
        "contributors",
      ]);
    },
    [commitDestroyContributor, handleResponse]
  );

  /* Destroy a file */
  const [commitDestroyAsset] =
    useMutation<useDestroyerDestroyAssetMutation>(destroyFileMutation);

  const file = useCallback(
    async (input: DestroyAssetInput, label: string) => {
      const response = await commitDestroyAsset({
        variables: { input },
      });
      return handleResponse(response.destroyAsset, label, ["assets"]);
    },
    [commitDestroyAsset, handleResponse]
  );

  /* Disable or destroy an ordering */
  const [commitDisableOrDestroyOrdering] =
    useMutation<useDestroyerDestroyOrderingMutation>(destroyOrderingMutation);

  const ordering = useCallback(
    async (input: DestroyOrderingInput, label: string) => {
      const response = await commitDisableOrDestroyOrdering({
        variables: { input },
      });
      return handleResponse(response.destroyOrdering, label, ["orderings"]);
    },
    [commitDisableOrDestroyOrdering, handleResponse]
  );

  /* Revoke access */
  const [commitRevokeAccess] =
    useMutation<useDestroyerRevokeAccessMutation>(revokeAccessMutation);

  const access = useCallback(
    async (input: RevokeAccessInput, label: string) => {
      const response = await commitRevokeAccess({ variables: { input } });
      return handleResponse(response.revokeAccess, label, ["allAccessGrants"]);
    },
    [commitRevokeAccess, handleResponse]
  );

  /* Destroy a link */
  const [commitDestroyLink] =
    useMutation<useDestroyerDestroyEntityLinkMutation>(
      destroyEntityLinkMutation
    );

  const link = useCallback(
    async (input: DestroyEntityLinkInput, label: string) => {
      const response = await commitDestroyLink({ variables: { input } });
      return handleResponse(response.destroyEntityLink, label, ["links"]);
    },
    [commitDestroyLink, handleResponse]
  );

  /* Destroy a page */
  const [commitDestroyPage] =
    useMutation<useDestroyerDestroyPageMutation>(destroyPageMutation);

  const page = useCallback(
    async (input: DestroyPageInput, label: string) => {
      const response = await commitDestroyPage({ variables: { input } });
      return handleResponse(response.destroyPage, label, ["pages"]);
    },
    [commitDestroyPage, handleResponse]
  );

  /* Destroy an announcement */
  const [commitDestroyAnnouncement] =
    useMutation<useDestroyerDestroyAnnouncementMutation>(
      destroyAnnouncementMutation
    );

  const announcement = useCallback(
    async (input: DestroyAnnouncementInput, label: string) => {
      const response = await commitDestroyAnnouncement({
        variables: { input },
      });
      return handleResponse(response.destroyAnnouncement, label, [
        "announcements",
      ]);
    },
    [commitDestroyAnnouncement, handleResponse]
  );

  return {
    collection,
    item,
    community,
    contributor,
    contribution,
    file,
    ordering,
    access,
    link,
    page,
    announcement,
  };
}
export default useDestroyer;

const destroyCollectionMutation = graphql`
  mutation useDestroyerDestroyCollectionMutation(
    $input: DestroyCollectionInput!
  ) {
    destroyCollection(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyItemMutation = graphql`
  mutation useDestroyerDestroyItemMutation($input: DestroyItemInput!) {
    destroyItem(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyContributorMutation = graphql`
  mutation useDestroyerDestroyContributorMutation(
    $input: DestroyContributorInput!
  ) {
    destroyContributor(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyContributionMutation = graphql`
  mutation useDestroyerDestroyContributionMutation(
    $input: DestroyContributionInput!
  ) {
    destroyContribution(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyCommunityMutation = graphql`
  mutation useDestroyerDestroyCommunityMutation(
    $input: DestroyCommunityInput!
  ) {
    destroyCommunity(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyFileMutation = graphql`
  mutation useDestroyerDestroyAssetMutation($input: DestroyAssetInput!) {
    destroyAsset(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyOrderingMutation = graphql`
  mutation useDestroyerDestroyOrderingMutation($input: DestroyOrderingInput!) {
    destroyOrdering(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

// TODO: Return access id
const revokeAccessMutation = graphql`
  mutation useDestroyerRevokeAccessMutation($input: RevokeAccessInput!) {
    revokeAccess(input: $input) {
      ...useDestroyerFragment
    }
  }
`;

const destroyEntityLinkMutation = graphql`
  mutation useDestroyerDestroyEntityLinkMutation(
    $input: DestroyEntityLinkInput!
  ) {
    destroyEntityLink(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyPageMutation = graphql`
  mutation useDestroyerDestroyPageMutation($input: DestroyPageInput!) {
    destroyPage(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyAnnouncementMutation = graphql`
  mutation useDestroyerDestroyAnnouncementMutation(
    $input: DestroyAnnouncementInput!
  ) {
    destroyAnnouncement(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyFragment = graphql`
  fragment useDestroyerFragment on StandardMutationPayload @inline {
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
