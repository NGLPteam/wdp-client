import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { GraphQLTaggedNode, readInlineData } from "relay-runtime";
import { useMutation, graphql } from "react-relay";
import { useNotify, usePageContext } from "hooks";
import {
  DestroyAnnouncementInput,
  RevokeAccessInput,
} from "types/graphql-schema";
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
import type {
  HarvestSourceDestroyInput,
  useDestroyerDestroyHarvestSourceMutation,
} from "@/relay/useDestroyerDestroyHarvestSourceMutation.graphql";
import type {
  HarvestMappingDestroyInput,
  useDestroyerDestroyHarvestMappingMutation,
} from "@/relay/useDestroyerDestroyHarvestMappingMutation.graphql";
import type { useDestroyerFragment$key } from "@/relay/useDestroyerFragment.graphql";
import { useDestroyerRevokeAccessMutation } from "@/relay/useDestroyerRevokeAccessMutation.graphql";
import {
  DestroyAssetInput,
  useDestroyerDestroyAssetMutation,
} from "@/relay/useDestroyerDestroyAssetMutation.graphql";
import { useDestroyerDestroyAnnouncementMutation } from "@/relay/useDestroyerDestroyAnnouncementMutation.graphql";
import {
  EntityPurgeInput,
  useDestroyerEntityPurgeMutation,
} from "@/relay/useDestroyerEntityPurgeMutation.graphql";

export function useDestroyer() {
  const notify = useNotify();
  const { t } = useTranslation();

  const { setTriggeredRefetchTags } = usePageContext();

  const handleResponse = useCallback(
    (
      data: useDestroyerFragment$key | null | undefined,
      name: string,
      refetchTags: string[],
    ) => {
      if (!data) return;
      const results = readInlineData<useDestroyerFragment$key>(
        destroyFragment as GraphQLTaggedNode,
        data,
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
    [notify, t, setTriggeredRefetchTags],
  );

  /* Destroy a collection */
  const [commitDestroyCollection] =
    useMutation<useDestroyerDestroyCollectionMutation>(
      destroyCollectionMutation,
    );

  const collection = useCallback(
    async (input: DestroyCollectionInput, label: string) => {
      commitDestroyCollection({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyCollection, label, ["collections"]),
      });
    },
    [commitDestroyCollection, handleResponse],
  );

  /* Destroy a item */
  const [commitDestroyItem] =
    useMutation<useDestroyerDestroyItemMutation>(destroyItemMutation);

  const item = useCallback(
    async (input: DestroyItemInput, label: string) => {
      commitDestroyItem({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyItem, label, ["items"]),
      });
    },
    [commitDestroyItem, handleResponse],
  );

  /* Destroy a contribution */
  const [commitDestroyContribution] =
    useMutation<useDestroyerDestroyContributionMutation>(
      destroyContributionMutation,
    );

  const contribution = useCallback(
    async (input: DestroyContributionInput, label: string) => {
      commitDestroyContribution({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyContribution, label, [
            "contributions",
          ]),
      });
    },
    [commitDestroyContribution, handleResponse],
  );

  /* Destroy a community */
  const [commitDestroyCommunity] =
    useMutation<useDestroyerDestroyCommunityMutation>(destroyCommunityMutation);

  const community = useCallback(
    async (input: DestroyCommunityInput, label: string) => {
      commitDestroyCommunity({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyCommunity, label, ["communities"]),
      });
    },
    [commitDestroyCommunity, handleResponse],
  );

  /* Destroy a contributor */
  const [commitDestroyContributor] =
    useMutation<useDestroyerDestroyContributorMutation>(
      destroyContributorMutation,
    );

  const contributor = useCallback(
    async (input: DestroyContributorInput, label: string) => {
      commitDestroyContributor({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyContributor, label, ["contributors"]),
      });
    },
    [commitDestroyContributor, handleResponse],
  );

  /* Destroy a file */
  const [commitDestroyAsset] =
    useMutation<useDestroyerDestroyAssetMutation>(destroyFileMutation);

  const file = useCallback(
    async (input: DestroyAssetInput, label: string) => {
      commitDestroyAsset({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyAsset, label, ["assets"]),
      });
    },
    [commitDestroyAsset, handleResponse],
  );

  /* Disable or destroy an ordering */
  const [commitDisableOrDestroyOrdering] =
    useMutation<useDestroyerDestroyOrderingMutation>(destroyOrderingMutation);

  const ordering = useCallback(
    async (input: DestroyOrderingInput, label: string) => {
      commitDisableOrDestroyOrdering({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyOrdering, label, ["orderings"]),
      });
    },
    [commitDisableOrDestroyOrdering, handleResponse],
  );

  /* Revoke access */
  const [commitRevokeAccess] =
    useMutation<useDestroyerRevokeAccessMutation>(revokeAccessMutation);

  const access = useCallback(
    async (input: RevokeAccessInput, label: string) => {
      commitRevokeAccess({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.revokeAccess, label, ["allAccessGrants"]),
      });
    },
    [commitRevokeAccess, handleResponse],
  );

  /* Destroy a link */
  const [commitDestroyLink] =
    useMutation<useDestroyerDestroyEntityLinkMutation>(
      destroyEntityLinkMutation,
    );

  const link = useCallback(
    async (input: DestroyEntityLinkInput, label: string) => {
      commitDestroyLink({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyEntityLink, label, ["links"]),
      });
    },
    [commitDestroyLink, handleResponse],
  );

  /* Destroy a page */
  const [commitDestroyPage] =
    useMutation<useDestroyerDestroyPageMutation>(destroyPageMutation);

  const page = useCallback(
    async (input: DestroyPageInput, label: string) => {
      commitDestroyPage({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyPage, label, ["pages"]),
      });
    },
    [commitDestroyPage, handleResponse],
  );

  /* Destroy an announcement */
  const [commitDestroyAnnouncement] =
    useMutation<useDestroyerDestroyAnnouncementMutation>(
      destroyAnnouncementMutation,
    );

  const announcement = useCallback(
    async (input: DestroyAnnouncementInput, label: string) => {
      commitDestroyAnnouncement({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.destroyAnnouncement, label, [
            "announcements",
          ]),
      });
    },
    [commitDestroyAnnouncement, handleResponse],
  );

  /* Destroy a harvest source */
  const [commitDestroyHarvestSource] =
    useMutation<useDestroyerDestroyHarvestSourceMutation>(
      destroyHarvestSourceMutation,
    );

  const harvestSource = useCallback(
    async (input: HarvestSourceDestroyInput, label: string) => {
      commitDestroyHarvestSource({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.harvestSourceDestroy, label, [
            "harvestSources",
          ]),
      });
    },
    [commitDestroyHarvestSource, handleResponse],
  );

  /* Destroy a harvest mapping */
  const [commitDestroyHarvestMapping] =
    useMutation<useDestroyerDestroyHarvestMappingMutation>(
      destroyHarvestMappingMutation,
    );

  const harvestMapping = useCallback(
    async (input: HarvestMappingDestroyInput) => {
      commitDestroyHarvestMapping({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(
            response.harvestMappingDestroy,
            t("glossary.harvest_mapping"),
            ["harvestMappings"],
          ),
      });
    },
    [commitDestroyHarvestMapping, handleResponse, t],
  );

  /* Purge an entity and all its descendants */
  const [commitPurgeEntity] =
    useMutation<useDestroyerEntityPurgeMutation>(entityPurgeMutation);

  const purge = useCallback(
    async (input: EntityPurgeInput, label: string, type: string) => {
      commitPurgeEntity({
        variables: { input },
        onCompleted: (response) =>
          handleResponse(response.entityPurge, label, [type]),
      });
    },
    [commitPurgeEntity, handleResponse],
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
    harvestSource,
    harvestMapping,
    purge,
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
      # This return schema does not have a destroyedId
      # destroyedId @deleteRecord
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

const destroyHarvestSourceMutation = graphql`
  mutation useDestroyerDestroyHarvestSourceMutation(
    $input: HarvestSourceDestroyInput!
  ) {
    harvestSourceDestroy(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyHarvestMappingMutation = graphql`
  mutation useDestroyerDestroyHarvestMappingMutation(
    $input: HarvestMappingDestroyInput!
  ) {
    harvestMappingDestroy(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const entityPurgeMutation = graphql`
  mutation useDestroyerEntityPurgeMutation($input: EntityPurgeInput!) {
    entityPurge(input: $input) {
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
