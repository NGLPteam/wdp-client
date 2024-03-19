import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import BaseInputLabel from "components/forms/BaseInputLabel";
import Checkbox from "../Checkbox";
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

function OrderingLinkSelectionInput(
  { id, contains, references, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const { t } = useTranslation();

  return (
    <Styled.Group
      id={id}
      role="group"
      ref={ref}
      aria-label={props["aria-label"] || undefined}
    >
      <BaseInputLabel>{t("forms.fields.links")}</BaseInputLabel>
      <Styled.Description>
        {t("forms.fields.include_links_description")}
      </Styled.Description>
      <Checkbox {...contains}>{t("forms.fields.link_contains")}</Checkbox>
      <Checkbox {...references}>{t("forms.fields.link_references")}</Checkbox>
    </Styled.Group>
  );
}

export default forwardRef(OrderingLinkSelectionInput);
