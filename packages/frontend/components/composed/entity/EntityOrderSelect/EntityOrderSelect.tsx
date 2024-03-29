import { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "next/navigation";
import { Button, Dropdown, Link, NamedLink } from "components/atomic";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import { EntityOrderSelectFragment$key } from "@/relay/EntityOrderSelectFragment.graphql";

export default function EntityOrderSelect({ data }: Props) {
  const orderings = useMaybeFragment<EntityOrderSelectFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();

  const { ordering, slug } = useParams();
  const searchParams = useSearchParams();

  const selectedOrder = useMemo(() => {
    const orderQuery = routeQueryArrayToString(ordering);

    return orderings?.edges?.find(({ node }) => node.identifier === orderQuery);
  }, [ordering, orderings]);

  const getHref = (ordering: string): string => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    return `/collections/${slug}/browse/${encodeURIComponent(
      ordering,
    )}?${params.toString()}`;
  };

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
            <NamedLink key={node.identifier} href={getHref(node.identifier)}>
              <Link
                as="span"
                active={selectedOrder?.node.identifier === node.identifier}
              >
                {node.name}
              </Link>
            </NamedLink>
          ))}
          placement="bottom-start"
        />
      ) : (
        <NamedLink
          key={orderings.edges[0].node.identifier}
          href={getHref(orderings.edges[0].node.identifier)}
        >
          <Button size="sm" type="button" secondary as="span" isBlock>
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
