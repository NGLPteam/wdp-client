import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";

import type {
  EntityLinksListFragment,
  EntityLinksListFragment$key,
} from "@/relay/EntityLinksListFragment.graphql";
import { CellProps } from "react-table";

import { capitalize } from "lodash";
type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityLinksList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: EntityLinksListProps) {
  const { t } = useTranslation();

  /* eslint-disable max-len */
  const sourceEntity = useMaybeFragment<EntityLinksListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

  /** Columns */
  const columns = [
    ModelColumns.NameColumn<EntityLinksNode>({
      route: "collection",
      accessor: "target",
      Cell: ({ row, value }: CellProps<EntityLinksNode>) => {
        if (!row?.original?.target?.slug) return value.slug;

        const route =
          row?.original?.target?.schemaDefinition?.kind === "COLLECTION"
            ? "collection"
            : "item";

        return (
          <NamedLink
            route={route}
            routeParams={{ slug: row.original.target.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{value.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<EntityLinksNode>({
      Header: <>{t("columns.schema")}</>,
      id: "target.schemaDefinition.name",
    }),
    ModelColumns.StringColumn<EntityLinksNode>({
      Header: <>{t("columns.type")}</>,
      id: "operator",
      Cell: ({ value }: CellProps<EntityLinksNode>) => capitalize(value),
    }),
  ];

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addLink"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug ? sourceEntity.slug : "",
        }}
        icon="plus"
      >
        {t("actions.create.link")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, EntityLinks, EntityLinksNode>
      modelName={"link"}
      columns={columns}
      actions={{}}
      data={sourceEntity?.links}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
    />
  );
}

interface EntityLinksListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityLinksListFragment$key;
}

type EntityLinks = EntityLinksListFragment["links"];

type EntityLinksNode = EntityLinks["nodes"][number];

const fragment = graphql`
  fragment EntityLinksListFragment on AnyEntity {
    ... on Item {
      slug
      links {
        nodes {
          id
          slug
          operator
          target {
            ... on Item {
              slug
              title
              schemaDefinition {
                name
                kind
              }
            }
            ... on Collection {
              slug
              title
              schemaDefinition {
                name
                kind
              }
            }
          }
        }
        ...ModelListPageFragment
      }
    }
    ... on Collection {
      slug
      links {
        nodes {
          id
          slug
          operator
          target {
            ... on Item {
              slug
              title
              schemaDefinition {
                name
                kind
              }
            }
            ... on Collection {
              slug
              title
              schemaDefinition {
                name
                kind
              }
            }
          }
        }
        ...ModelListPageFragment
      }
    }
  }
`;

export default EntityLinksList;
