import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Select } from "components/forms";
import { SearchModalFragment$data } from "@/relay/SearchModalFragment.graphql";
import * as Styled from "./SearchModal.styles";

export default function SearchModalContent({ searchData }: Props) {
  const selectId = "searchFilter";
  const { t } = useTranslation();

  const { register } = useForm();

  const breadcrumbs =
    searchData?.breadcrumbs && searchData.breadcrumbs.length > 0
      ? [...searchData.breadcrumbs]
          .reverse()
          .filter((entity) => entity.crumb?.__typename !== "Item")
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
      <Styled.SelectWrapper>
        <Styled.SelectLabel
          htmlFor={selectId}
          className="t-label-mix a-color-lighter"
        >
          {t("search.search_area_label")}
        </Styled.SelectLabel>
        <Select
          id={selectId}
          defaultValue={defaultValue}
          {...register("entity")}
        >
          {searchData && searchData.__typename !== "Item" && (
            <option value={defaultValue}>{searchData.title}</option>
          )}
          {breadcrumbs &&
            breadcrumbs.map(({ crumb: { __typename, slug, title } }) => (
              <option
                key={slug}
                value={JSON.stringify({ type: __typename, slug })}
              >
                {title}
              </option>
            ))}
          <option value={""}>{t("search.instance_scope_label")}</option>
        </Select>
      </Styled.SelectWrapper>
    )
  );
}

interface Props {
  searchData?: SearchModalFragment$data | null;
}
