"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/atomic";
import * as Styled from "./ErrorBlock.styles";

interface Props {
  /** The error message */
  message?: string;
  reset?: () => void;
}

export default function ErrorMessage({ message, reset }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p className="t-h3">{t("messages.server_error")}</p>
      <p className="a-color-light">{message}</p>
      {reset && (
        <Button onClick={reset} size="sm">
          Try again
        </Button>
      )}
    </Styled.Wrapper>
  );
}
