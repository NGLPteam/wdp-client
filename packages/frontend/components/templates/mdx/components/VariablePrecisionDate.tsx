import { getPrecisionDateDisplay } from "helpers";
import type { DatePrecision } from "@/types/graphql-schema";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  precision: DatePrecision;
  value: string | null;
};

export default function VariablePrecisionDate({
  children: _children,
  precision,
  value,
}: Props) {
  if (!value) return null;

  const date = getPrecisionDateDisplay(precision, value);

  return <span>{date}</span>;
}
