import { Button } from "components/atomic";
import { RadioGroup, Fieldset } from "components/forms";
import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";
import * as Styled from "../PruneEntitiesModal.styles";

type Props = {
  onContinue: () => void;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onModeSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mode?: string;
  type: "attempt" | "source";
  title?: string;
};

export default function PruneEntitiesForm({
  onContinue,
  handleClose,
  onModeSelect,
  mode,
  type,
  title,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Styled.Header>
        {t("harvesting.prune.modal_header", { type: capitalize(type) })}
      </Styled.Header>
      <Styled.Subheader className="t-label-sm">{title}</Styled.Subheader>
      <form onSubmit={onContinue}>
        <Fieldset label={t("harvesting.prune.mode_label")}>
          <RadioGroup
            name="mode"
            label={t("harvesting.prune.mode_label")}
            hideLabel
            description={t("harvesting.prune.mode_description")}
            options={[
              {
                value: "UNMODIFIED",
                label: t("harvesting.prune.mode_unmodified_label"),
                default: true,
              },
              {
                value: "EVERYTHING",
                label: t("harvesting.prune.mode_everything_label"),
              },
            ]}
            onChange={onModeSelect}
          />
        </Fieldset>
        <Styled.Note>{t("harvesting.prune.note")}</Styled.Note>
        <Styled.ButtonWrapper>
          <Button type="submit" disabled={!mode}>
            {t("common.continue")}
          </Button>
          <Button $secondary onClick={handleClose}>
            {t("common.cancel")}
          </Button>
        </Styled.ButtonWrapper>
      </form>
    </>
  );
}
