import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button } from "components/atomic";

import * as Styled from "./Actions.styles";

export default function Actions({ onCancel }: Props) {
  const { formState } = useFormContext();

  const { t } = useTranslation();

  const submitDisabled = formState.isSubmitting || formState.isValidating;

  return (
    <Styled.Footer className="l-flex l-flex--gap">
      <Button disabled={submitDisabled} type="submit">
        {t("forms.common.save")}
      </Button>
      {onCancel && (
        <Button type="button" onClick={onCancel} secondary>
          {t("forms.common.cancel")}
        </Button>
      )}
    </Styled.Footer>
  );
}

interface Props {
  onCancel?: () => void;
}
