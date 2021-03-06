import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { NamedLink, Image } from "components/atomic";
import { CommunityThumbnailColumnFragment$key } from "@/relay/CommunityThumbnailColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & CommunityThumbnailColumnFragment$key;

const CommunityThumbnailColumn = <T extends Node>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span className="a-hidden">{t("lists.hero_or_logo_column")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    accessor: (originalRow: T | Row) => originalRow,
    cellType: "thumbnail",
    disableSortBy: true,
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
          <a>
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
          </a>
        </NamedLink>
      ) : null;
    },
    ...props,
  };
};

export default CommunityThumbnailColumn;

const fragment = graphql`
  fragment CommunityThumbnailColumnFragment on Community {
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
