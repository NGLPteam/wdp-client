import React from "react";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";

const Contributor: Page = () => {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, moving on...
  router.replace({
    pathname: activeRoute?.redirect,
    query: { ...router.query },
  });

  return null;
};

Contributor.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};

export default Contributor;
