import React from "react";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { Page } from "types/page";

const CommunityDetail: Page = () => {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, move on to collections
  router.replace({
    pathname: activeRoute?.redirect,
    query: { ...router.query },
  });

  return null;
};

CommunityDetail.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};

export default CommunityDetail;
