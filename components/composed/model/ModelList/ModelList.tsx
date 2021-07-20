import React, { useState } from "react";
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
import { ModelData } from "components/composed/model";
import { useRouter } from "next/router";

type ModelDataProps = React.ComponentProps<typeof ModelData>;

function ModelList<T>({
  isLoading,
  error,
  modelName,
  models,
  pageInfo,
  ...props
}: ModelListProps<T>) {
  const { t } = useTranslation("glossary");
  const router = useRouter();
  const [view, setView] = useState("table");
  const title = t(modelName, { count: 2 });

  const handleSubmit = (value) => {
    const pathname = window.location.pathname;
    const { model, page, ...query } = router.query;

    router.push({
      pathname,
      query: { ...query, q: value },
    });
  };

  const handleViewToggle = () => {
    setView(view === "table" ? "grid" : "table");
  };

  return (
    <section>
      {title && <PageHeader title={startCase(title)} />}
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <>
          <PageActions
            search={<Search onSubmit={handleSubmit} />}
            actions={
              <DataViewToggle
                selectedView={view}
                controlsID="id"
                onClick={handleViewToggle}
              />
            }
          />
          {pageInfo && models && models.length > 0 && (
            <PageCountActions pageInfo={pageInfo} />
          )}
          {error ? (
            <ErrorMessage name={error.name} message={error.message} />
          ) : models && models.length > 0 ? (
            <div id="id">
              <ModelData
                title={title}
                models={models}
                selectedView={view}
                {...props}
              />
            </div>
          ) : (
            <NoResultsMessage />
          )}

          {pageInfo &&
            models &&
            models.length > 0 &&
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

// TODO: Either extend ModelTable (and potentially ModelGrid), or
// Create an Model context rather than passing data down multiple levels of components

// The generic type is consumed by ModelDataProps
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ModelListProps<T> extends Omit<ModelDataProps, "title"> {
  isLoading?: boolean;
  error?: { name: string; message: string };
  modelName?: string;
  pageInfo?: PageInfo;
}

export default ModelList;
