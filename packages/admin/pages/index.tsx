import { PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars, useIsAuthenticated } from "hooks";
import { DashboardLayout } from "components/composed/dashboard";
import { LoadingPage } from "components/atomic";
import { DashboardLayoutQuery } from "__generated__/DashboardLayoutQuery.graphql";
import { query } from "components/composed/dashboard/DashboardLayout/DashboardLayout";

type Props = {
  initialQueryRef?: PreloadedQuery<DashboardLayoutQuery>;
};

export default function HomePage({ initialQueryRef }: Props) {
  const queryVars = useBaseListQueryVars();
  const isAuth = useIsAuthenticated();

  return isAuth ? (
    <>
      <QueryLoaderWrapper<DashboardLayoutQuery>
        query={query}
        variables={queryVars}
        initialQueryRef={initialQueryRef}
        loadingFallback={<LoadingPage />}
      >
        {({ queryRef }) => queryRef && <DashboardLayout queryRef={queryRef} />}
      </QueryLoaderWrapper>
    </>
  ) : null;
}
