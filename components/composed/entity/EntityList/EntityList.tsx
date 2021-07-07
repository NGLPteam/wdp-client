import React from "react";
import startCase from "lodash/startCase";
import { PageActions, PageCountActions, PageHeader } from "components/layout";
import { Pagination } from "components/atomic";
import { ButtonControl } from "components/atomic/buttons";
import { useTranslation } from "react-i18next";
import { PageInfo } from "types/common";
import { Search } from "components/atomic/forms";
import { FullPageLoader } from "components/global";
import { EntityTable } from "components/composed/entity";

type EntityTableProps = React.ComponentProps<typeof EntityTable>;

const EntityList = ({
  isLoading,
  error,
  entityName,
  entities,
  pageInfo,
  ...props
}: EntityListProps) => {
  const { t } = useTranslation("glossary");
  const title = t(entityName, { count: 2 });

  return (
    <section>
      {title && <PageHeader title={startCase(title)} />}
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <>
          <PageActions
            search={
              <Search
                onSubmit={(value) => {
                  // eslint-disable-next-line
                  console.log("search", value);
                }}
              />
            }
            actions={
              <ButtonControl
                onClick={() => {
                  // eslint-disable-next-line
                  console.log("click");
                }}
                icon="plus"
              >
                Add
              </ButtonControl>
            }
          />
          {pageInfo && <PageCountActions pageInfo={pageInfo} />}
          {entities ? (
            <EntityTable entities={entities} {...props} />
          ) : (
            <div>No results</div>
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
};

// TODO: Either extend EntityTable (and potentially EntityGrid), or
// Create an Entity context rather than passing data down multiple levels of components
export interface EntityListProps extends EntityTableProps {
  isLoading?: boolean;
  // Need an Alexa consultation to decide how to define this type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  entityName?: string;
  pageInfo?: PageInfo;
}

export default EntityList;
