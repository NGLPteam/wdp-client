import React from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import { PageCountActions } from "components/layout";
import { ButtonControlGroup } from "components/atomic";

import type { IdType } from "react-table";

interface ModelPageCountActionsProps<
  T extends ModelPageCountActionsFragment$key,
  V extends Record<string, unknown>
> {
  data?: T | null;
  selection?: Record<IdType<V>, boolean>;
}

function ModelPageCountActions<
  T extends ModelPageCountActionsFragment$key,
  V extends Record<string, unknown>
>({ data, selection }: ModelPageCountActionsProps<T, V>) {
  const enhancedData = useFragment<ModelPageCountActionsFragment$key>(
    fragment,
    data || null
  );
  const { t } = useTranslation();

  const deleteSelected = () => {
    console.info("selection to delete", selection);
  };

  // Future multiselect options might include 'merge'
  return (
    <PageCountActions
      pageInfo={enhancedData?.pageInfo}
      selectedCount={selection && Object.keys(selection).length}
      multiselectActions={
        <ButtonControlGroup
          toggleLabel="Selection options"
          menuLabel="Selection options"
          buttons={[
            {
              icon: "delete",
              children: t("delete"),
              onClick: deleteSelected,
            },
          ]}
        />
      }
    />
  );
}

export default ModelPageCountActions;

const fragment = graphql`
  fragment ModelPageCountActionsFragment on Paginated {
    pageInfo {
      page
      pageCount
      perPage
      hasNextPage
      hasPreviousPage
      totalCount
      # This vaulue is currently not used
      # totalUnfilteredCount
    }
  }
`;
