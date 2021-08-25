import React from "react";
import { useTranslation } from "react-i18next";
import type { ValidateResult } from "react-hook-form";

import { IconFactory } from "components/factories";

import * as Styled from "./Message.styles";

export default function Message({ type, result }: Props) {
  const { t } = useTranslation("common");

  let message = "";

  if (typeof result === "string") {
    message = result;
  } else if (type === "required" && typeof result === "boolean") {
    message = t("forms.validation.required");
  } else if (type && !message) {
    message = type;
  }

  if (!message) {
    return null;
  }

  return (
    <Styled.Error>
      <IconFactory icon="warning" title="Error" />
      <p>{message}</p>
    </Styled.Error>
  );
}

interface Props {
  type?: string;
  result: ValidateResult;
}
