import BaseSelect from "components/forms/BaseSelect";
import { mapSortBy } from "components/composed/model/ModelList/helpers/mapSortBy";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import * as Styled from "./OrderSelect.styles";

type SelectProps = React.ComponentProps<typeof BaseSelect>;
type Options = SelectProps["options"];

export default function OrderSelect() {
  const { t } = useTranslation();

  const router = useRouter();

  const orderOpts = [
    { label: t("lists.sort.newest"), value: mapSortBy("createdAt", true) },
    { label: t("lists.sort.oldest"), value: mapSortBy("createdAt") },
    { label: t("forms.fields.title"), value: mapSortBy("title") },
    { label: t("forms.fields.published"), value: mapSortBy("published", true) },
    { label: t("glossary.schema"), value: mapSortBy("schema") },
  ] as Options;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== router.query.order) {
      router.push(
        { query: { ...router.query, order: e.target.value || undefined } },
        undefined,
        {
          shallow: true,
        },
      );
    }
  };

  return (
    <Styled.Select
      name="order"
      aria-label={t("lists.sort.aria_label")}
      placeholder={t("lists.sort.label")}
      options={orderOpts}
      defaultValue={router.query?.order}
      onChange={onChange}
    />
  );
}
