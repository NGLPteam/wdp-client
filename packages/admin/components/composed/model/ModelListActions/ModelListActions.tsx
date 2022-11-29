import { PageActions } from "components/layout";
import { DataViewToggle } from "components/atomic";
import useIsMobile from "hooks/useIsMobile";
import { ViewOptions, DEFAULT_VIEW_OPTIONS } from "utils/view-options";

export interface ModelListActionsProps {
  viewOptions?: ViewOptions[];
  setView: React.Dispatch<React.SetStateAction<ViewOptions>>;
  selectedView: ViewOptions;
  listId: string;
  search?: React.ReactNode;
}

function ModelListActions({
  viewOptions = DEFAULT_VIEW_OPTIONS,
  setView,
  selectedView,
  listId,
  search,
}: ModelListActionsProps) {
  const isNotMobile = !useIsMobile();

  return (
    <PageActions
      search={search}
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
