import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Button, Dropdown, Link, NamedLink } from "components/atomic";
import { RouteHelper, routeQueryArrayToString } from "routes";
import { EntityOrderSelectFragment$key } from "@/relay/EntityOrderSelectFragment.graphql";

export default function EntityOrderSelect({ data }: Props) {
  const orderings = useMaybeFragment<EntityOrderSelectFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

  const orderRoute = RouteHelper.findRouteByName("collection.browse");

  const router = useRouter();

  const selectedOrder = useMemo(() => {
    const orderQuery = routeQueryArrayToString(router.query.ordering);

    return orderings?.edges?.find(({ node }) => node.identifier === orderQuery);
  }, [router.query, orderings]);

  return orderings && orderings.edges.length > 0 ? (
    <div>
      {orderings.edges.length > 1 ? (
        <Dropdown
          label={t("form.order_label")}
          disclosure={
            <Button
              secondary
              size="sm"
              type="button"
              isBlock
              icon="chevronDown"
            >
              {selectedOrder?.node.name || orderings.edges[0].node.name}
            </Button>
          }
          menuItems={orderings.edges.map(({ node }) => (
            <NamedLink
              key={node.identifier}
              route={orderRoute?.name || ""}
              routeParams={{
                ...router.query,
                ordering: node.identifier,
                page: 1,
              }}
              passHref
            >
              <Link active={selectedOrder?.node.identifier === node.identifier}>
                {node.name}
              </Link>
            </NamedLink>
          ))}
          placement="bottom-start"
        />
      ) : (
        <NamedLink
          key={orderings.edges[0].node.identifier}
          route={orderRoute?.name || ""}
          routeParams={{
            ...router.query,
            ordering: orderings.edges[0].node.identifier,
            page: 1,
          }}
          passHref
        >
          <Button size="sm" type="button" secondary as="a" isBlock>
            {orderings.edges[0].node.name}
          </Button>
        </NamedLink>
      )}
    </div>
  ) : null;
}

interface Props {
  data?: EntityOrderSelectFragment$key | null;
}

const fragment = graphql`
  fragment EntityOrderSelectFragment on OrderingConnection {
    edges {
      node {
        name
        identifier
      }
    }
  }
`;
