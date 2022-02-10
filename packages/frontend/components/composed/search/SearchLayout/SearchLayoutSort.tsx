import React from "react";
import { useTranslation } from "react-i18next";
import { Fieldset, Select } from "components/forms";

export default function SearchLayoutSort() {
  const { t } = useTranslation();

  return (
    <Fieldset legend={t("sort.results_header")}>
      <Select id="sortSearch" label={t("sort.label")} size="lg" block hideLabel>
        <option value="RECENT">{t("sort.most_recent")}</option>
      </Select>
    </Fieldset>
  );
}
