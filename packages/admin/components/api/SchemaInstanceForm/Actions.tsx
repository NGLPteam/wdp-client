import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import * as Styled from "./Actions.styles";
import { Button } from "components/atomic";

export default function Actions({ onCancel, onSaveAndClose }: Props) {
  const { formState } = useFormContext();

  const { t } = useTranslation();

  const submitDisabled = formState.isSubmitting || formState.isValidating;

  return (
    <Styled.Footer className="l-flex l-flex--gap">
      <Button disabled={submitDisabled} type="submit">
        {t("common.save")}
      </Button>
      {onSaveAndClose && (
        <Button
          type="submit"
          disabled={submitDisabled}
          data-close={true}
          onClick={onSaveAndClose}
        >
          {t("common.save_and_close")}
        </Button>
      )}
      {onCancel && (
        <Button
          type="button"
          disabled={submitDisabled}
          onClick={onCancel}
          secondary
        >
          {t("common.cancel")}
        </Button>
      )}
    </Styled.Footer>
  );
}

interface Props {
  onCancel?: () => void;
  onSaveAndClose?: () => void;
}
