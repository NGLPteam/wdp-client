import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import get from "lodash/get";
import { Image } from "components/atomic";
import { AssetThumbnailColumnFragment$key } from "@/relay/AssetThumbnailColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & AssetThumbnailColumnFragment$key;

const AssetThumbnailColumn = <T extends Row>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => (
      <span className="a-hidden">{t("lists.thumbnail_column")}</span>
    ),
    id: "thumbnail",
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => get(originalRow, "thumbnail") }),
    enableSorting: false,
    meta: {
      cellType: "thumbnail",
    },
    cell: ({ row }) => {
      const asset = readInlineData(fragment, row.original);

      const image = asset?.thumbnail?.storage
        ? asset.thumbnail.image?.png
        : null;

      return <Image data={image} />;
    },
    ...props,
  };
};

export default AssetThumbnailColumn;

const fragment = graphql`
  fragment AssetThumbnailColumnFragment on Asset @inline {
    thumbnail: preview {
      storage
      image: medium {
        png {
          ...ImageFragment
        }
      }
    }
  }
`;
