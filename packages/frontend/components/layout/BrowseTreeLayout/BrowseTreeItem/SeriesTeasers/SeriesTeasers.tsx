import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { DotList } from "components/atomic";
import { SeriesTeasersFragment$key } from "@/relay/SeriesTeasersFragment.graphql";

export default function SeriesTeasers({ data }: Props) {
  const { t } = useTranslation();
  const entry = useMaybeFragment(fragment, data);

  const series = entry?.series?.pageInfo?.totalCount;
  const papers = entry?.papers?.pageInfo?.totalCount;

  return entry ? (
    <DotList className="t-copy-lighter">
      {entry.updatedAt && (
        <li>
          {t("common.last_updated", {
            value: formatDate(entry.updatedAt, "L/d/yy"),
          })}
        </li>
      )}
      {series ? (
        <li>
          {t("counts.series", {
            count: series,
          })}
        </li>
      ) : (
        <li>
          {t("counts.paper", {
            count: papers,
          })}
        </li>
      )}
    </DotList>
  ) : null;
}

interface Props {
  data: SeriesTeasersFragment$key;
}

const fragment = graphql`
  fragment SeriesTeasersFragment on Collection {
    updatedAt

    papers: items(schema: "nglp:paper") {
      pageInfo {
        totalCount
      }
    }

    series: collections(schema: "nglp:series") {
      pageInfo {
        totalCount
      }
    }
  }
`;
