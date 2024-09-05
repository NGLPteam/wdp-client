import React, { forwardRef, Ref, useCallback } from "react";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons/ButtonControl/ButtonControl.styles";
import Select from "components/forms/Select";
import FileCreateModal from "components/composed/file/FileCreateModal";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseSelect from "../BaseSelect";
import * as Styled from "./AssetPropertySelect.styles";

export type OnChangeInput =
  | React.ChangeEvent<HTMLSelectElement>
  | string[]
  | string
  | null;

type BaseProps = React.ComponentProps<typeof Select> & {
  refetchAssets?: () => void;
  onChange: (e: OnChangeInput) => void;
};

/* eslint-disable react/prop-types */
const AssetPropertySelect = forwardRef(
  (
    {
      label,
      hideLabel,
      name,
      description,
      options,
      isWide,
      refetchAssets,
      onChange,
      ...inputProps
    }: BaseProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const dialog = useDialogState({ visible: false, animated: true });
    const { t } = useTranslation();

    const handleSuccess = useCallback(
      (newAssetId: string) => {
        if (refetchAssets) refetchAssets();
        if (newAssetId) onChange(newAssetId);
      },
      [refetchAssets, onChange],
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(e.target.value ? e : null);

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
              onChange={handleChange}
              disabled={options?.length === 0}
              {...inputProps}
            />
            <DialogDisclosure
              as={ButtonControl}
              type="button"
              $icon="plus"
              {...dialog}
            >
              {t("forms.asset_property_select.add_file")}
            </DialogDisclosure>
          </Styled.Field>
        </BaseInputWrapper>
        <FileCreateModal dialog={dialog} onSuccess={handleSuccess} />
      </>
    );
  },
);

export default AssetPropertySelect;
