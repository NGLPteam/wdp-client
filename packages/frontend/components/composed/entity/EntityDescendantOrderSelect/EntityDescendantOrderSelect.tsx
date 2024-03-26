"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Select } from "components/forms";

export default function EntityDescendantOrderSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { t } = useTranslation();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("order", e.target.value);

      const url = `${pathname}?${params.toString()}`;

      router.push(url);
    },
    [router, searchParams, pathname],
  );

  return (
    <div>
      <label className="a-hidden" htmlFor="order">
        {t("list.order_by_label")}
      </label>
      <Select
        id="order"
        onChange={handleChange}
        defaultValue={searchParams.get("order") ?? undefined}
      >
        <option disabled>{t("list.order_by_label")}</option>
        <option value="PUBLISHED_ASCENDING">Publish Date, Ascending</option>
        <option value="PUBLISHED_DESCENDING">Publish Date, Descending</option>
        <option value="TITLE_ASCENDING">Title, A-Z</option>
        <option value="TITLE_DESCENDING">Title, Z-A</option>
      </Select>
    </div>
  );
}
