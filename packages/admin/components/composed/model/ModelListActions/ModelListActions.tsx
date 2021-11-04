import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { PageActions } from "components/layout";
import { Search } from "components/forms";
import { DataViewToggle } from "components/atomic";
import useIsMobile from "hooks/useIsMobile";
import { ViewOptions, DEFAULT_VIEW_OPTIONS } from "utils/view-options";

export interface ModelListActionsProps {
  viewOptions?: ViewOptions[];
  setView: React.Dispatch<React.SetStateAction<ViewOptions>>;
  selectedView: ViewOptions;
  listId: string;
}

function ModelListActions({
  viewOptions = DEFAULT_VIEW_OPTIONS,
  setView,
  selectedView,
  listId,
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
            viewOptions={viewOptions}
            selectedView={selectedView}
            controlsID={listId}
            onClick={setView}
          />
        )) ||
        undefined
      }
    />
  );
}

export default ModelListActions;
