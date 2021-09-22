import React from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import { PageCountActions } from "components/layout";
import { ButtonControlGroup } from "components/atomic";

import { MultiselectActions, Row } from "react-table";

interface ModelPageCountActionsProps<
  T extends ModelPageCountActionsFragment$key,
  V extends Record<string, unknown>
> {
  data?: T | null;
  selectedFlatRows?: Row<V>[];
  multiselectActions?: MultiselectActions<V>;
}

function ModelPageCountActions<
  T extends ModelPageCountActionsFragment$key,
  V extends Record<string, unknown>
>({
  data,
  selectedFlatRows,
  multiselectActions,
}: ModelPageCountActionsProps<T, V>) {
  const { t } = useTranslation();

  // Get page info data
  const enhancedData = useFragment<ModelPageCountActionsFragment$key>(
    fragment,
    data || null
  );

  // Return either a ButtonControlGroup with multiselect actions OR undefined
  function renderMultiselectActions() {
    return multiselectActions && selectedFlatRows ? (
      <ButtonControlGroup
        toggleLabel="Selection options"
        menuLabel="Selection options"
        buttons={[
          {
            ...(multiselectActions.handleDelete && {
              icon: "delete",
              children: t("delete"),
              onClick: () => {
                // Not sure why we need to check for handleDelete again,
                // but here we are
                multiselectActions.handleDelete &&
                  multiselectActions.handleDelete({ rows: selectedFlatRows });
              },
            }),
          },
        ]}
      />
    ) : undefined;
  }

  // Future multiselect options might include 'merge'
  return (
    <PageCountActions
      pageInfo={enhancedData?.pageInfo}
      selectedCount={selectedFlatRows && selectedFlatRows.length}
      multiselectActions={renderMultiselectActions()}
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
