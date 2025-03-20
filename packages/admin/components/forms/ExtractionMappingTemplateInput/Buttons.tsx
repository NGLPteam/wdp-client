import { useTranslation } from "react-i18next";
import { ButtonControl, ButtonControlGroup } from "components/atomic/buttons";
import Dialog from "components/layout/Dialog";

type Props = {
  value?: string;
  handleReset: (e: React.MouseEvent) => void;
  parentDefault?: string;
  handleRevert: (e: React.MouseEvent) => void;
  isDialog: boolean;
};

export default function EditorButtons({
  value,
  handleReset,
  parentDefault,
  handleRevert,
  isDialog,
}: Props) {
  const { t } = useTranslation();

  const showRevert = !!parentDefault && parentDefault !== value;

  return (
    <ButtonControlGroup toggleLabel={t("actions")} menuLabel={t("actions")}>
      <ButtonControl onClick={handleReset}>
        {t("forms.extraction_mapping_template.reset_label")}
      </ButtonControl>
      {showRevert && (
        <ButtonControl onClick={handleRevert}>
          {t("forms.extraction_mapping_template.revert_label")}
        </ButtonControl>
      )}
      {!isDialog && (
        <Dialog.Toggle>
          <ButtonControl icon="linkExternal">
            {t("forms.extraction_mapping_template.full_screen")}
          </ButtonControl>
        </Dialog.Toggle>
      )}
    </ButtonControlGroup>
  );
}
