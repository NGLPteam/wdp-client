import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { DashboardLayoutQuery } from "@/relay/DashboardLayoutQuery.graphql";
import DashboardInstallation from "../DashboardInstallation";
import DashboardCollections from "../DashboardCollections";
import * as Styled from "./DashboardLayout.styles";

export default function DashboardLayout({ queryRef }: Props) {
  const queryData = usePreloadedQuery(query, queryRef);

  return (
    <Styled.Wrapper>
      <DashboardCollections data={queryData} />
      <DashboardInstallation data={queryData} />
    </Styled.Wrapper>
  );
}

interface Props {
  queryRef: PreloadedQuery<DashboardLayoutQuery>;
}

export const query = graphql`
  query DashboardLayoutQuery($page: Int, $order: EntityOrder) {
    ...DashboardInstallationFragment
    ...DashboardCollectionsFragment @arguments(page: $page, order: $order)
  }
`;
