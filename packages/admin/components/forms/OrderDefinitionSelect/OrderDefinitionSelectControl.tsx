import { Suspense } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormFieldSkeleton } from "components/atomic/loading";
import OrderDefinitionSelectDropdown from "./OrderDefinitionSelect";

export default function OrderDefinitionSelectControl({ name }: Props) {
  const { control } = useFormContext();

  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (val) =>
          val && val?.length > 7
            ? (t("forms.validation.order_by_max") as string)
            : !val || val.length === 0
              ? (t("forms.validation.order_by_min") as string)
              : true,
      }}
      render={({ field: { ...props } }) => (
        <Suspense fallback={<FormFieldSkeleton />}>
          <OrderDefinitionSelectDropdown {...props} />
        </Suspense>
      )}
    />
  );
}

interface Props {
  name: string;
}
