import React from "react";
import { useTranslation } from "react-i18next";
import Checkbox from "../Checkbox";
import BaseInputLabel from "../BaseInputLabel";
import * as Styled from "./OrderingLinksSelection.styles";
import type { UseFormRegisterReturn } from "react-hook-form";

interface Props
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "aria-label" | "id"
  > {
  contains: UseFormRegisterReturn;
  references: UseFormRegisterReturn;
}

export default function OrderingLinksSelection({
  id,
  contains,
  references,
  ...props
}: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Fieldset
      id={id}
      role="group"
      aria-label={props["aria-label"] || undefined}
    >
      <BaseInputLabel as="legend">{t("forms.fields.links")}</BaseInputLabel>
      <Styled.Description>
        {t("forms.fields.include_links_description")}
      </Styled.Description>
      <Styled.Fields>
        <Checkbox {...contains}>{t("forms.fields.link_contains")}</Checkbox>
        <Checkbox {...references}>{t("forms.fields.link_references")}</Checkbox>
      </Styled.Fields>
    </Styled.Fieldset>
  );
}
