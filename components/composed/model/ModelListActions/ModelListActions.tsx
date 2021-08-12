import React, { useCallback } from "react";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import { PageActions } from "components/layout";
import { Search } from "components/atomic/forms";
import { DataViewToggle } from "components/atomic";
import { useRouter } from "next/router";
import useIsMobile from "hooks/useIsMobile";

export interface ModelListActionsProps {
  active: DataViewOptions;
  setView: React.Dispatch<React.SetStateAction<DataViewOptions>>;
  viewOptions?: DataViewOptions[];
}

function ModelListActions({
  active,
  setView,
  viewOptions = [DataViewOptions.table, DataViewOptions.grid],
}: ModelListActionsProps) {
  const router = useRouter();
  const isNotMobile = !useIsMobile();

  const handleSearchSubmit = useCallback(
    (value) => {
      const pathname = window.location.pathname;
      const { model, page, ...query } = router.query;

      router.push({
        pathname,
        query: { ...query, q: value },
      });
    },
    [router]
  );

  return (
    <PageActions
      search={<Search onSubmit={handleSearchSubmit} />}
      actions={
        (isNotMobile && (
          <DataViewToggle
            selectedView={active}
            viewOptions={viewOptions}
            controlsID="id"
            onClick={setView}
          />
        )) ||
        undefined
      }
    />
  );
}

export default ModelListActions;
