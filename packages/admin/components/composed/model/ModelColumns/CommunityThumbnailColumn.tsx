import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { NamedLink, Image } from "components/atomic";
import { CommunityThumbnailColumnFragment$key } from "@/relay/CommunityThumbnailColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & CommunityThumbnailColumnFragment$key;

const CommunityThumbnailColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => (
      <span className="a-hidden">{t("lists.hero_or_logo_column")}</span>
    ),
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    accessorFn: (originalRow: T | Row) => originalRow,
    meta: {
      cellType: "thumbnail",
    },
    enableSorting: false,
    cell: ({ row: _row, getValue }) => {
      const value = getValue() as CommunityThumbnailColumnFragment$key;
      const community = readInlineData(fragment, value);

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
  fragment CommunityThumbnailColumnFragment on Community @inline {
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
