import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { PageHeroColumnFragment$key } from "@/relay/PageHeroColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
import * as Styled from "./EntityThumbnailColumn/EntityThumbnailColumn.styles";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PageHeroColumnFragment$key;

const PageHeroColumn = <T extends Node>(props: Props<T> = {}): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <span>{t("lists.hero_column")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    enableSorting: false,
    meta: {
      cellType: "thumbnail",
    },
    cell: ({ getValue }) => {
      const value = getValue<Row>();

      if (!hasFragments(value)) return <></>;

      const page = readInlineData(fragment, value);

      const image = page.heroImage?.storage ? page.heroImage.thumb?.webp : null;

      return page ? (
        <Styled.Thumbnail
          data={image}
          objectFit="contain"
          objectPosition="center"
        />
      ) : null;
    },
    ...props,
  };
};

export default PageHeroColumn;

const fragment = graphql`
  fragment PageHeroColumnFragment on Page @inline {
    heroImage {
      storage
      thumb {
        webp {
          ...ImageFragment
        }
      }
    }
  }
`;
