import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import { filterSearchableProperties } from "@wdp/lib/search";
import flatMap from "lodash/flatMap";
import uniqBy from "lodash/uniqBy";
import isEmpty from "lodash/isEmpty";
import { normalizeRouteQueryArray } from "@wdp/lib/routes";
import { Fieldset, BaseForm } from "components/forms";
import { Button } from "components/atomic";
import {
  SearchFiltersFragment$data,
  SearchFiltersFragment$key,
} from "@/relay/SearchFiltersFragment.graphql";
import SearchFilter from "../SearchFilter";
import SearchOrderBy from "../SearchOrderBy";
import SearchSchemaFilter from "../SearchSchemaFilter";
import styles from "./SearchFilters.module.css";

export default function SearchFilters({
  data,
  id,
  onSubmit: onSubmitCallback,
}: Props) {
  const searchData = useFragment<SearchFiltersFragment$key>(fragment, data);

  const { t } = useTranslation();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultValues = {
    ...(searchParams.get("filters") && {
      ...JSON.parse(String(searchParams.get("filters"))),
    }),
    schema: normalizeRouteQueryArray(searchParams.get("schema")),
  };

  const onSubmit = (data: Record<string, string>) => {
    removeEmptyKeys(data);

    const { schema, ...filters } = data;

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (!isEmpty(filters)) {
      params.set("filters", JSON.stringify(filters));
    } else {
      params.delete("filters");
    }
    if (schema) {
      params.set("schema", schema);
    } else {
      params.delete("schema");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);

    if (onSubmitCallback) onSubmitCallback();
  };

  const handleReset = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete("filters");
    params.delete("schema");

    const url = `${pathname}?${params.toString()}`;

    router.push(url);

    if (onSubmitCallback) onSubmitCallback();
  };

  const schemaProps = useMemo(() => {
    if (!searchData) return [];

    const flat = flatMap(searchData.schemas, (args) => {
      return args.searchableProperties;
    });

    return filterSearchableProperties<FilterNode>(uniqBy(flat, "searchPath"));
  }, [searchData]);

  const coreProps = useMemo(
    () => filterSearchableProperties<FilterNode>(searchData.coreProperties),
    [searchData],
  );

  return (
    <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
      {({ form: { reset } }) => (
        <>
          <div className={styles.filters} id={id}>
            <SearchOrderBy />
            {searchData && (
              <Fieldset legend={t("filter.results_header")}>
                <SearchSchemaFilter data={searchData} />
                {coreProps.map((prop: FilterNode, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
                {schemaProps.map((prop: FilterNode, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
              </Fieldset>
            )}
          </div>
          <div className={styles.buttons}>
            <Button type="submit" size="sm">
              {t("common.submit")}
            </Button>
            <Button
              type="reset"
              secondary
              size="sm"
              onClick={() => {
                handleReset();
                reset();
              }}
            >
              {t("filter.clear_filters")}
            </Button>
          </div>
        </>
      )}
    </BaseForm>
  );
}

interface Props {
  data: SearchFiltersFragment$key;
  /** a11y ID for form compontents */
  id?: string;
  /** Callback runs on form submit.
   * Used for closing the filter drawer after submission.
   */
  onSubmit?: () => void;
}

type FilterNode = SearchFiltersFragment$data["coreProperties"][number];

const fragment = graphql`
  fragment SearchFiltersFragment on SearchScope {
    coreProperties {
      ... on SearchableProperty {
        searchPath
      }
      ...SearchFilterFragment
    }
    ...SearchSchemaFilterFragment
    schemas: availableSchemaVersions {
      searchableProperties {
        ... on SearchableProperty {
          searchPath
          label
        }
        ...SearchFilterFragment
      }
    }
  }
`;
