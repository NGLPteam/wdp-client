import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import get from "lodash/get";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { AssetThumbnailColumnFragment$key } from "@/relay/AssetThumbnailColumnFragment.graphql";
import { BaseImage } from "components/atomic";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & AssetThumbnailColumnFragment$key;

const AssetThumbnailColumn = <T extends Row>(
  props: Props<T> = {}
): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span className="a-hidden">{t("lists.thumbnail")}</span>,
    id: "thumbnail",
    accessor: (originalRow: T) => get(originalRow, "thumbnail"),
    disableSortBy: true,
    cellType: "thumbnail",
    Cell: ({ row }: CellProps<T>) => {
      const asset = useMaybeFragment(fragment, row.original);

      const image = asset?.thumbnail?.storage
        ? asset.thumbnail.image?.png
        : null;

      return image && image.url ? (
        <BaseImage
          image={{
            url: image.url,
            alt: "",
            width: image.width || 0,
            height: image.height || 0,
          }}
        />
      ) : null;
    },
    ...props,
  };
};

export default AssetThumbnailColumn;

const fragment = graphql`
  fragment AssetThumbnailColumnFragment on Asset {
    thumbnail: preview {
      storage
      image: medium {
        png {
          alt
          url
          height
          width
        }
      }
    }
  }
`;
