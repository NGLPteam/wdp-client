import React, { forwardRef, Ref } from "react";
import i18next from "i18next";
import Select from "../Select";

type SelectProps = React.ComponentProps<typeof Select>;

type Props = Omit<SelectProps, "label" | "options">;

const SORTING_OPTIONS = [
  {
    value: JSON.stringify({
      path: "entity.title",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.title.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.title",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.title.descending"),
  },
  {
    value: JSON.stringify({
      path: "entity.updated_at",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.updated_at.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.updated_at",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.updated_at.descending"),
  },
  {
    value: JSON.stringify({
      path: "entity.published",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.published.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.published",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.published.descending"),
  },
];

function OrderingSortBy({ ...props }: Props, ref: Ref<HTMLSelectElement>) {
  return (
    <Select
      ref={ref}
      label="forms.fields.sort_by"
      options={SORTING_OPTIONS}
      {...props}
    />
  );
}

export default forwardRef(OrderingSortBy);
