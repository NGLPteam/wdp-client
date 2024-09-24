"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/atomic";
import * as Styled from "./ErrorBlock.styles";

interface Props {
  /** Optional heading. Default is "A server error occured." */
  heading?: string;
  /** The error message */
  message?: string;
  reset?: () => void;
}

export default function ErrorMessage({ heading, message, reset }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p className="t-h3">{t("messages.server_error") || heading}</p>
      <p className="a-color-light t-break-words">{message}</p>
      {reset && (
        <Button onClick={reset} size="sm">
          Try again
        </Button>
      )}
    </Styled.Wrapper>
  );
}
