import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { getPrecisionDateDisplay } from "helpers";
import { PrecisionDateFragment$key } from "@/relay/PrecisionDateFragment.graphql";

export default function PrecisionDate({ data, label }: Props) {
  const date = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return date && date.value ? (
    <>{`${label ? t(label) : ""} ${getPrecisionDateDisplay(
      date.precision,
      date.value,
    )}`}</>
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
