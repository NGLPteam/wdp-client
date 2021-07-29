import React, { useState, useMemo } from "react";
import startCase from "lodash/startCase";
import { PageActions, PageCountActions, PageHeader } from "components/layout";
import {
  Pagination,
  ErrorMessage,
  NoResultsMessage,
  DataViewToggle,
} from "components/atomic";
import { useTranslation } from "react-i18next";
import { PageInfo } from "types/graphql-schema";
import { Search } from "components/atomic/forms";
import { FullPageLoader } from "components/global";
import { ModelList } from "components/composed/model";
import { useRouter } from "next/router";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import ModelAddButton from "../ModelAddButton/ModelAddButton";
import { useWindowSize } from "hooks";
import { breakpoints } from "theme/base/variables";
import type { ModelNames } from "helpers/models";
import { ModelListProps } from "components/composed/model/ModelList";

export interface ModelListPageProps<T extends Record<string, unknown>>
  extends Omit<ModelListProps<T>, "title" | "selectedView"> {
  isLoading?: boolean;
  error?: { name: string; message: string } | null;
  modelName?: Lowercase<ModelNames>;
  pageInfo?: PageInfo;
  defaultView?: DataViewOptions;
  hideViewToggle?: boolean;
}

function ModelListPage<T extends Record<string, unknown>>({
  isLoading,
  error,
  modelName,
  models,
  pageInfo,
  defaultView,
  hideViewToggle,
  ...props
}: ModelListPageProps<T>) {
  const { t } = useTranslation("glossary");
  const router = useRouter();
  const [view, setView] = useState(defaultView || DataViewOptions.table);
  const size = useWindowSize();

  // If mobile, set view to grid and hide view controls
  const isMobile = useMemo(
    () => size.width && size.width <= parseInt(breakpoints.tableBreak, 10),
    [size]
  );

  const title = modelName ? t(modelName, { count: 2 }) : "";

  const handleSubmit = (value: string) => {
    const pathname = window.location.pathname;
    const { model, page, ...query } = router.query;

    router.push({
      pathname,
      query: { ...query, q: value },
    });
  };

  const handleViewToggle = () => {
    setView(
      view === DataViewOptions.table
        ? DataViewOptions.grid
        : DataViewOptions.table
    );
  };

  return (
    <section>
      {title && (
        <PageHeader
          title={startCase(title)}
          buttons={modelName && <ModelAddButton modelName={modelName} />}
        />
      )}
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <>
          <PageActions
            search={<Search onSubmit={handleSubmit} />}
            actions={
              (!(hideViewToggle || isMobile) && (
                <DataViewToggle
                  selectedView={view}
                  controlsID="id"
                  onClick={handleViewToggle}
                />
              )) ||
              undefined
            }
          />
          {pageInfo && models && models.length > 0 && (
            <PageCountActions pageInfo={pageInfo} />
          )}
          {error ? (
            <ErrorMessage name={error.name} message={error.message} />
          ) : models && models.length > 0 ? (
            <div id="id">
              <ModelList
                title={title}
                models={models}
                selectedView={isMobile ? DataViewOptions.grid : view}
                {...props}
              />
            </div>
          ) : (
            <NoResultsMessage />
          )}

          {pageInfo &&
            models &&
            models.length > 0 &&
            pageInfo.pageCount &&
            pageInfo.pageCount > 1 && (
              <Pagination
                currentPage={pageInfo.page}
                totalPages={pageInfo.pageCount}
              />
            )}
        </>
      )}
    </section>
  );
}

export default ModelListPage;
