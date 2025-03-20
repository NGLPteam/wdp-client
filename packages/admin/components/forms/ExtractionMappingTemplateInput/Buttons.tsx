import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons";
import Dialog from "components/layout/Dialog";
import * as Styled from "./styles";

type Props = {
  value?: string;
  parentDefault?: string;
  handleReset: (e: React.MouseEvent) => void;
  handleRevert: (e: React.MouseEvent) => void;
  isDialog: boolean;
};

export default function EditorButtons({
  value,
  parentDefault,
  handleReset,
  handleRevert,
  isDialog,
}: Props) {
  const { t } = useTranslation();

  return (
    <Styled.ButtonGroup>
      <div>
        <ButtonControl onClick={handleReset}>
          {t("forms.extraction_mapping_template.reset_label")}
        </ButtonControl>
        {!!parentDefault && (
          <ButtonControl
            onClick={handleRevert}
            disabled={parentDefault === value}
          >
            {t("forms.extraction_mapping_template.revert_label")}
          </ButtonControl>
        )}
      </div>
      {!isDialog && (
        <Dialog.Toggle>
          <ButtonControl icon="linkExternal">
            {t("forms.extraction_mapping_template.full_screen")}
          </ButtonControl>
        </Dialog.Toggle>
      )}
    </Styled.ButtonGroup>
  );
}
