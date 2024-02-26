import { graphql, readInlineData } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { Image } from "components/atomic";
import { PageHeroColumnFragment$key } from "@/relay/PageHeroColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & PageHeroColumnFragment$key;

const PageHeroColumn = <T extends Node>(props: Props<T> = {}): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span>{t("lists.hero_column")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    accessorFn: (originalRow: T | Row) => originalRow,
    enableSorting: false,
    meta: {
      cellType: "thumbnail",
    },
    cell: ({ getValue }) => {
      const value = getValue() as PageHeroColumnFragment$key;
      const page = readInlineData(fragment, value);

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
  fragment PageHeroColumnFragment on Page @inline {
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
