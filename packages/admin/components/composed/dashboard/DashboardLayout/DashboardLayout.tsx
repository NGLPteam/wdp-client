import { graphql, useFragment } from "react-relay";
import DashboardInstallation from "../DashboardInstallation";
import DashboardCollections from "../DashboardCollections";
import * as Styled from "./DashboardLayout.styles";
import { DashboardLayoutFragment$key } from "@/relay/DashboardLayoutFragment.graphql";

export default function DashboardLayout({ data }: Props) {
  const queryData = useFragment(fragment, data);

  return (
    <Styled.Wrapper>
      <DashboardCollections data={queryData} />
      <DashboardInstallation data={queryData} />
    </Styled.Wrapper>
  );
}

interface Props {
  data: DashboardLayoutFragment$key;
}

const fragment = graphql`
  fragment DashboardLayoutFragment on Query
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder" }
  ) {
    ...DashboardInstallationFragment
    ...DashboardCollectionsFragment @arguments(page: $page, order: $order)
  }
`;
