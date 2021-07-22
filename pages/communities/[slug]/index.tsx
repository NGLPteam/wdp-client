import React from "react";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { useRouter } from "next/router";

export default function CommunityDetail() {
  const router = useRouter();

  // Nothing to see here, move on to collections
  router.push({
    pathname: `/communities/[slug]/collections`,
    query: { ...router.query },
  });

  return null;
}

CommunityDetail.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};
