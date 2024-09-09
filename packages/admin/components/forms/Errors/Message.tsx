import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";
import * as Styled from "./Message.styles";
import type { ValidateResult } from "react-hook-form";

interface Props {
  type?: string;
  result: ValidateResult;
  label?: string;
  name?: string;
}

export default function Message({ type, result, label }: Props) {
  const { t } = useTranslation();

  let message = "";

  if (typeof result === "string") {
    message = result;
  } else if (type === "required" && typeof result === "boolean") {
    message = capitalize(t("forms.validation.required"));
  } else if (type && !message) {
    message = capitalize(type);
  }

  return message ? (
    <Styled.Error>
      <Styled.ErrorIcon icon="warning" title="Error" />
      <span>
        {label && <span>{label}</span>} {message}
      </span>
    </Styled.Error>
  ) : null;
}
