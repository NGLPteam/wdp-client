import React from "react";
import { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useMutation } from "relay-hooks";
import {
  CommunityListFragment$key,
  CommunityListFragment,
} from "@/relay/CommunityListFragment.graphql";
import { useMaybeFragment, useDrawerHelper, useDestroyer } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import { CommunityListOrderMutation } from "@/relay/CommunityListOrderMutation.graphql";
import { HeroImageLayout } from "types/graphql-schema";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function usePositionMutation() {
  const [mutate, mutationState] =
    useMutation<CommunityListOrderMutation>(mutation);

  const submitHandler = async ({
    source,
    destination,
    name,
    communityId,
    heroImageLayout,
  }: {
    source: number;
    destination: number;
    name: string;
    communityId: string;
    heroImageLayout: HeroImageLayout;
  }) => {
    const response = await mutate({
      variables: {
        input: {
          communityId,
          title: name,
          position: destination,
          heroImageLayout,
        },
      },
    });

    console.info(response);
  };

  return submitHandler;
}

function CommunityList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: CommunityListProps) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const changeCommunityPosition = usePositionMutation();

  const communities = useMaybeFragment<CommunityListFragment$key>(
    fragment,
    data
  );

  const columns = [
    ModelColumns.StringColumn<Node>({
      Header: "Position",
      id: "position",
      accessor: (row: Node) => row.position,
    }),
    ModelColumns.CommunityNameColumn<Node>({
      accessor: (row: Node) => row,
    }),
    ModelColumns.CreatedAtColumn<Node>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editCommunity", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.community({ communityId: row.original.id }, row.original.name),
    handleView: ({ row }: ModelTableActionProps<Node>) =>
      row.original.slug ? `/communities/${row.original.slug}` : null,
  };

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer drawer="addCommunity" icon="plus">
        {t("actions.create.community")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  const handleDragEnd = (source: number, destination: number) => {
    const sourceNode = communities?.edges[source];
    const destinationNode = communities?.edges[destination];

    if (!sourceNode?.node) return;

    changeCommunityPosition({
      source,
      destination,
      name: sourceNode.node.name,
      communityId: sourceNode.node.id,
      heroImageLayout: sourceNode.node.heroImageLayout,
    });
  };

  return (
    <ModelListPage<T, ListFragment, Node>
      modelName="community"
      columns={columns}
      actions={actions}
      data={communities}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
      onDragEnd={handleDragEnd}
    />
  );
}

interface CommunityListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CommunityListFragment$key | null;
}

type ListFragment = CommunityListFragment;

type CommunityNode = CommunityListFragment["edges"][number]["node"];

type Node = CommunityNode;

const fragment = graphql`
  fragment CommunityListFragment on CommunityConnection {
    edges {
      node {
        slug
        id
        createdAt
        updatedAt
        name
        allowedActions
        position
        heroImageLayout
        ...CommunityNameColumnFragment
      }
    }
    ...ModelListPageFragment
  }
`;

export default CommunityList;

const mutation = graphql`
  mutation CommunityListOrderMutation($input: UpdateCommunityInput!) {
    updateCommunity(input: $input) {
      community {
        id
        position
      }
    }
  }
`;
