import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import Select from "../Select";

type Props = Omit<React.ComponentProps<typeof Select>, "options" | "label">;

function OrderRenderSelect(
  { placeholder, ...props }: Props,
  ref: Ref<HTMLSelectElement>
) {
  const { t } = useTranslation();

  const renderOptions = [
    {
      label: t("forms.order_render_select.option_flat"),
      value: "FLAT",
    },
    {
      label: t("forms.order_render_select.option_tree"),
      value: "TREE",
    },
  ];

  return (
    <Select
      label={t("forms.order_render_select.label")}
      options={renderOptions}
      {...props}
      ref={ref}
    />
  );
}

export default forwardRef(OrderRenderSelect);
