import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { DotList } from "components/atomic";
import { TeasersFragment$key } from "@/relay/TeasersFragment.graphql";

export default function Teasers({ data }: Props) {
  const { t } = useTranslation();
  const entry = useMaybeFragment(fragment, data);

  const entryIsSeries = entry?.schema?.identifier === "series";

  const getCountFromSchemaRank = (entity: string) => {
    if (!entry?.schemaRanks || !entry?.schemaRanks.length) return null;
    const rank = entry.schemaRanks.filter(
      ({ namespace, identifier }) =>
        namespace === "nglp" && identifier === entity
    );
    return rank.length ? rank[0].count : null;
  };

  const series = getCountFromSchemaRank("series");
  const papers = getCountFromSchemaRank("paper");

  return entry ? (
    <DotList className="t-copy-lighter t-copy-sm">
      {entry.updatedAt && (
        <li>
          {t("common.last_updated", {
            value: formatDate(entry.updatedAt, "L/d/yy"),
          })}
        </li>
      )}
      {entryIsSeries && series ? (
        <li>
          {t("counts.series", {
            count: series,
          })}
        </li>
      ) : papers ? (
        <li>
          {t("counts.paper", {
            count: papers,
          })}
        </li>
      ) : null}
    </DotList>
  ) : null;
}

interface Props {
  data: TeasersFragment$key;
}

const fragment = graphql`
  fragment TeasersFragment on Collection {
    updatedAt

    schema: schemaVersion {
      identifier
    }

    schemaRanks {
      count
      identifier
      namespace
    }
  }
`;
