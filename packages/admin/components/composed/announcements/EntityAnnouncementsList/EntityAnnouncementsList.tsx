import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { ModelTableActionProps } from "@tanstack/react-table";
import { formatDate } from "@wdp/lib/helpers";
import { useDestroyer, useDrawerHelper, useMaybeFragment } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type { EntityAnnouncementsListFragment$key } from "@/relay/EntityAnnouncementsListFragment.graphql";
import type {
  EntityAnnouncementsListDataFragment,
  EntityAnnouncementsListDataFragment$key,
} from "@/relay/EntityAnnouncementsListDataFragment.graphql";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityAnnouncementsList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: EntityAnnouncementsListProps) {
  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  /* eslint-disable max-len */
  const sourceEntity = useMaybeFragment<EntityAnnouncementsListFragment$key>(
    fragment,
    data
  );
  const announcementsData =
    useMaybeFragment<EntityAnnouncementsListDataFragment$key>(
      linksFragment,
      sourceEntity?.announcements
    );
  /* eslint-enable max-len */

  /** Columns */
  const columns = [
    ModelColumns.StringColumn<Node>({
      header: () => <>{t("lists.header_column")}</>,
      id: "header",
    }),
    ModelColumns.StringColumn<Node>({
      header: () => <>{t("lists.published_column")}</>,
      id: "publishedOn",
      accessorFn: (originalRow: Node) => {
        if (!originalRow.publishedOn) return null;
        return formatDate(originalRow.publishedOn);
      },
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editAnnouncement", {
        drawerSlug: sourceEntity?.slug,
        drawerAnnouncementSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.announcement(
        { announcementId: row.original.id },
        row.original.header || "glossary.announcement"
      ),
  };

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addAnnouncement"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug ? sourceEntity.slug : "",
        }}
        icon="plus"
        actions="self.update"
      >
        {t("actions.add.announcement")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, EntityAnnouncementsListDataFragment, Node>
      modelName={"announcement"}
      columns={columns}
      data={announcementsData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
      actions={actions}
    />
  );
}

interface EntityAnnouncementsListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityAnnouncementsListFragment$key | null;
}

type Node = EntityAnnouncementsListDataFragment["edges"][number]["node"];

const linksFragment = graphql`
  fragment EntityAnnouncementsListDataFragment on AnnouncementConnection {
    edges {
      node {
        id
        slug
        header
        publishedOn
      }
    }
    ...ModelListPageFragment
  }
`;

const fragment = graphql`
  fragment EntityAnnouncementsListFragment on AnyEntity {
    ... on Community {
      slug
      announcements(page: $page, perPage: 20) {
        ...EntityAnnouncementsListDataFragment
      }
    }
    ... on Collection {
      slug
      announcements(page: $page, perPage: 20) {
        ...EntityAnnouncementsListDataFragment
      }
    }
    ... on Item {
      slug
      announcements(page: $page, perPage: 20) {
        ...EntityAnnouncementsListDataFragment
      }
    }
  }
`;

export default EntityAnnouncementsList;
