import React, { forwardRef, Ref } from "react";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons/ButtonControl/ButtonControl.styles";
import Select from "components/forms/Select";
import FileCreateModal from "components/composed/file/FileCreateModal";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseSelect from "../BaseSelect";
import * as Styled from "./AssetPropertySelect.styles";

type BaseProps = React.ComponentProps<typeof Select>;

const AssetPropertySelect = forwardRef(
  (
    {
      label,
      hideLabel,
      name,
      description,
      options,
      isWide,
      ...inputProps
    }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const dialog = useDialogState({ visible: false, animated: true });
    const { t } = useTranslation();

    return (
      <>
        <BaseInputWrapper
          name={name}
          hideLabel={hideLabel}
          label={label}
          required={inputProps.required}
          isWide={isWide}
          description={description}
        >
          <Styled.Field>
            <BaseSelect
              name={name}
              ref={ref}
              placeholder={t("forms.asset_property_select.placeholder")}
              options={options}
              {...inputProps}
            />
            <DialogDisclosure as={ButtonControl} icon="plus" {...dialog}>
              {t("forms.asset_property_select.add_file")}
            </DialogDisclosure>
          </Styled.Field>
        </BaseInputWrapper>
        <FileCreateModal dialog={dialog} />
      </>
    );
  }
);

type Props = BaseProps;

export default AssetPropertySelect;
