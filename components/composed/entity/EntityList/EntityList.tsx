import React from "react";
import startCase from "lodash/startCase";
import { PageActions, PageCountActions, PageHeader } from "components/layout";
import { Pagination, Error } from "components/atomic";
import { useTranslation } from "react-i18next";
import { PageInfo } from "types/graphql-schema";
import { Search } from "components/atomic/forms";
import { FullPageLoader } from "components/global";
import { EntityTable } from "components/composed/entity";
import { useRouter } from "next/router";
import EntityAddButton from "../EntityAddButton/EntityAddButton";

type EntityTableProps = React.ComponentProps<typeof EntityTable>;

function EntityList<T>({
  isLoading,
  error,
  entityName,
  entities,
  pageInfo,
  ...props
}: EntityListProps<T>) {
  const { t } = useTranslation("glossary");
  const router = useRouter();
  const title = t(entityName, { count: 2 });

  const handleSubmit = (value) => {
    const pathname = window.location.pathname;
    const { entity, page, ...query } = router.query;

    router.push({
      pathname,
      query: { ...query, q: value },
    });
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
            actions={<EntityAddButton entityName={entityName} />}
          />
          {pageInfo && <PageCountActions pageInfo={pageInfo} />}
          {error ? (
            <Error error={error} />
          ) : entities && entities.length > 0 ? (
            <EntityTable entities={entities} {...props} />
          ) : (
            <div style={{ marginBottom: 20 }}>TODO: Style No Results</div>
          )}

          {pageInfo && (
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

// TODO: Either extend EntityTable (and potentially EntityGrid), or
// Create an Entity context rather than passing data down multiple levels of components

// The generic type is consumed by EntityTableProps
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface EntityListProps<T> extends EntityTableProps {
  isLoading?: boolean;
  // Need an Alexa consultation to decide how to define this type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  entityName?: string;
  pageInfo?: PageInfo;
}

export default EntityList;
