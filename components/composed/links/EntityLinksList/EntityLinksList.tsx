import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";

import type {
  EntityLinksListFragment,
  EntityLinksListFragment$key,
} from "@/relay/EntityLinksListFragment.graphql";
import { CellProps } from "react-table";
import { NamedLink } from "components/atomic";
import { capitalize } from "lodash";
type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityLinksList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: EntityLinksListProps) {
  const { t } = useTranslation();

  /* eslint-disable max-len */
  const collectionContributions = useMaybeFragment<EntityLinksListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

  /** Columns */
  const columns = [
    ModelColumns.NameColumn<EntityLinksNode>({
      route: "collection",
      accessor: "source",
      Cell: ({ row, value }: CellProps<EntityLinksNode>) => {
        if (!row?.original?.source?.slug) return value.slug;
        return (
          <NamedLink
            route={"collection"}
            routeParams={{ slug: row.original.source.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{value.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<EntityLinksNode>({
      Header: <>{t("columns.schema")}</>,
      id: "source.schemaDefinition.name",
    }),
    ModelColumns.StringColumn<EntityLinksNode>({
      Header: <>{t("columns.type")}</>,
      id: "operator",
      Cell: ({ value }: CellProps<EntityLinksNode>) => capitalize(value),
    }),
  ];

  return (
    <ModelListPage<T, EntityLinksListFragment, EntityLinksNode>
      modelName={"link"}
      columns={columns}
      actions={{}}
      data={collectionContributions}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface EntityLinksListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityLinksListFragment$key;
}

type EntityLinksNode = EntityLinksListFragment["nodes"][number];

const fragment = graphql`
  fragment EntityLinksListFragment on EntityLinkConnection {
    nodes {
      id
      slug
      operator
      source {
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
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default EntityLinksList;
