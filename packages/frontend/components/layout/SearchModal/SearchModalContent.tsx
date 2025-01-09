import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Select } from "components/forms";
import { SearchModalFragment$data } from "@/relay/SearchModalFragment.graphql";
import styles from "./SearchModal.module.css";
import type { UseFormRegisterReturn } from "react-hook-form";

export default function SearchModalContent({ searchData, register }: Props) {
  const selectId = "searchFilter";
  const { t } = useTranslation();

  const breadcrumbs =
    searchData?.breadcrumbs && searchData.breadcrumbs?.length > 0
      ? [...searchData.breadcrumbs]
          .reverse()
          .filter((entity) => entity?.crumb?.__typename !== "Item")
      : null;

  const defaultValue =
    (searchData &&
      searchData.__typename !== "Item" &&
      JSON.stringify({
        type: searchData.__typename,
        slug: searchData.slug,
      })) ||
    undefined;

  return (
    (searchData || breadcrumbs) && (
      <div className={styles.selectWrapper}>
        <label
          htmlFor={selectId}
          className={classNames(
            "t-label-mix a-color-lighter",
            styles.selectLabel,
          )}
        >
          {t("search.search_area_label")}
        </label>
        <Select
          id={selectId}
          defaultValue={defaultValue}
          {...register("entity")}
        >
          {searchData && searchData.__typename !== "Item" && (
            <option value={defaultValue}>{searchData.title}</option>
          )}
          {breadcrumbs &&
            breadcrumbs.map((item) => {
              const { crumb } = item ?? {};
              const { __typename, slug, title } = crumb ?? {};
              return (
                <option
                  key={slug}
                  value={JSON.stringify({ type: __typename, slug })}
                >
                  {title}
                </option>
              );
            })}
          <option value={""}>{t("search.instance_scope_label")}</option>
        </Select>
      </div>
    )
  );
}

interface Props {
  searchData?: SearchModalFragment$data | null;
  register: (name: string) => UseFormRegisterReturn;
}
