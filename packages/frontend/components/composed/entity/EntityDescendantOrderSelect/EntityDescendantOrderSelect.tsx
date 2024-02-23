import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Select } from "components/forms";
import { useDescendantListQueryVars } from "hooks";

export default function EntityDescendantOrderSelect() {
  const router = useRouter();

  const { t } = useTranslation();

  const { order } = useDescendantListQueryVars();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order: e.target.value },
      });
    },
    [router]
  );

  return (
    <div>
      <label className="a-hidden" htmlFor="order">
        {t("list.order_by_label")}
      </label>
      <Select id="order" onChange={handleChange} defaultValue={order}>
        <option disabled>{t("list.order_by_label")}</option>
        <option value="PUBLISHED_ASCENDING">Publish Date, Ascending</option>
        <option value="PUBLISHED_DESCENDING">Publish Date, Descending</option>
        <option value="TITLE_ASCENDING">Title, A-Z</option>
        <option value="TITLE_DESCENDING">Title, Z-A</option>
      </Select>
    </div>
  );
}
