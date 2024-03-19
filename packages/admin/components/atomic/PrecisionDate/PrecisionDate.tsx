import { formatDate } from "@wdp/lib/helpers";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { PrecisionDateFragment$key } from "@/relay/PrecisionDateFragment.graphql";
import type { DatePrecision } from "types/graphql-schema";

export function getPrecisionDateDisplay(
  precision: DatePrecision,
  value: string,
) {
  switch (precision) {
    case "YEAR":
      return formatDate(value, "yyyy");

    case "MONTH":
      return formatDate(value, "MMMM yyyy");

    default:
      return formatDate(value, "MMMM d, yyyy");
  }
}

export default function PrecisionDate({ data, label }: Props) {
  const date = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return date && date.value ? (
    <>
      {label && <span className="a-hidden">{t(label)}</span>}
      {getPrecisionDateDisplay(date.precision, date.value)}
    </>
  ) : null;
}

interface Props {
  data?: PrecisionDateFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment PrecisionDateFragment on VariablePrecisionDate {
    precision
    value
  }
`;
