import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { NamedLink, Image } from "components/atomic";
import { CommunityNameColumnFragment$key } from "@/relay/CommunityNameColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & CommunityNameColumnFragment$key;

const CommunityNameColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.name_column")}</span>,
    id: "title",
    // By default, the thumbnail fragment should be on the row root
    accessor: (originalRow: T | Row) => originalRow,
    cellType: "name",
    Cell: ({ value }: CellProps<T>) => {
      const community = useMaybeFragment(fragment, value);

      const logo = community.logo?.storage ? community.logo.original : null;

      const hero = community.heroImage?.storage
        ? community.heroImage.small.webp
        : null;

      const size = 50;

      return community ? (
        <NamedLink
          route="community"
          routeParams={{ slug: community.slug || "" }}
          passHref
        >
          <a className="t-weight-md a-link l-flex l-flex--gap-sm">
            {logo ? (
              <Image
                data={logo}
                width={size}
                height={size}
                objectFit="contain"
                objectPosition="top center"
              />
            ) : hero ? (
              <Image data={hero} width={size} height={size} objectFit="cover" />
            ) : null}
            <span>{community.name}</span>
          </a>
        </NamedLink>
      ) : null;
    },
    ...props,
  };
};

export default CommunityNameColumn;

const fragment = graphql`
  fragment CommunityNameColumnFragment on Community {
    name
    slug
    logo {
      storage
      original {
        ...ImageFragment
      }
    }
    heroImage {
      storage
      small {
        webp {
          ...ImageFragment
        }
      }
    }
  }
`;
