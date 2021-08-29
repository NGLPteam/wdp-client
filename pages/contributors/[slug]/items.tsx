import React from "react";
import { RouteHelper } from "routes";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";

const ContributorItemContributions: Page = () => {
  const activeRoute = RouteHelper.activeRoute();

  return <>{activeRoute?.label}</>;
};

ContributorItemContributions.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};

export default ContributorItemContributions;
