import React from "react";
import { FullPageLoader } from "components/global";
import EntityTableLoaded, { EntityTableLoadedProps } from "./EntityTableLoaded";

const EntityTable = ({
  isLoading,
  error: errorIgnored,
  ...loadedProps
}: EntityTableProps) => {
  if (isLoading) return <FullPageLoader />;
  // TODO: Deal with a query error here.
  return EntityTableLoaded(loadedProps);
};

export default EntityTable;

interface EntityTableProps extends EntityTableLoadedProps {
  isLoading?: boolean;
  // Need an Alexa consultation to decide how to define this type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}
