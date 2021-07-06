import React from "react";
import startCase from "lodash/startCase";
import { PageActions, PageCountActions, PageHeader } from "components/layout";
import { ButtonControl, Pagination } from "components/atomic";
import { useTranslation } from "react-i18next";
import { ColumnOptions } from "types/react-table";
import { PageInfo } from "types/common";
import { Search } from "components/forms";
import { FullPageLoader, EntityTable } from "components/global";
import {
  EntityTableActions,
  OnSelectionChangeProps,
  OnSortProps,
} from "../EntityTable/EntityTable";

const EntityList = ({
  isLoading,
  error,
  entityName,
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
          <EntityTable {...props} />
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

export interface EntityListProps {
  isLoading?: boolean;
  // Need an Alexa consultation to decide how to define this type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  columns: ColumnOptions[];
  pageInfo?: PageInfo;
  entityName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities?: ReadonlyArray<any>;
  withUpdatedAt?: boolean;
  withCreatedAt?: boolean;
  actions?: EntityTableActions;
  onSort?: (props: OnSortProps) => void;
  onSelectionChange?: (props: OnSelectionChangeProps) => void;
  withRowSelection?: boolean;
}

export default EntityList;
