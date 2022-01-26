import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import { Image } from "components/atomic";
import { PageHeroColumnFragment$key } from "@/relay/PageHeroColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PageHeroColumnFragment$key;

const PageHeroColumn = <T extends Node>(props: Props<T> = {}): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <span>{t("lists.hero_column")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    accessor: (originalRow: T | Row) => originalRow,
    disableSortBy: true,
    cellType: "thumbnail",
    Cell: ({ value }: CellProps<T>) => {
      const page = useMaybeFragment(fragment, value);

      const size = 50;

      const image = page.heroImage?.storage ? page.heroImage.small?.webp : null;

      return page ? (
        <Image
          data={image}
          objectFit="cover"
          objectPosition="center"
          width={size}
          height={size}
        />
      ) : null;
    },
    ...props,
  };
};

export default PageHeroColumn;

const fragment = graphql`
  fragment PageHeroColumnFragment on Page {
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
