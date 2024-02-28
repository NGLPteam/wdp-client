import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Fieldset, Select } from "components/forms";

export default function SearchOrderBy() {
  const { t } = useTranslation();

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          order: e.target.value,
        },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <Fieldset legend={t("sort.results_header")}>
      <Select
        id="sortSearch"
        label={t("sort.label")}
        size="lg"
        block
        hideLabel
        onChange={onChange}
        defaultValue={router.query.order || "PUBLISHED_ASCENDING"}
      >
        <option disabled>{t("list.order_by_label")}</option>
        <option value="PUBLISHED_ASCENDING">Publish Date, Ascending</option>
        <option value="PUBLISHED_DESCENDING">Publish Date, Descending</option>
        <option value="OLDEST">Date Created, Ascending</option>
        <option value="RECENT">Date Created, Descending</option>
        <option value="TITLE_ASCENDING">Title, A-Z</option>
        <option value="TITLE_DESCENDING">Title, Z-A</option>
        <option value="SCHEMA_NAME_ASCENDING">Schema, Ascending</option>
        <option value="SCHEMA_NAME_DESCENDING">Schema, Descending</option>
      </Select>
    </Fieldset>
  );
}
