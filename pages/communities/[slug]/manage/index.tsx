import React from "react";
import CommunityLayout from "components/composed/community/CommunityLayout";

export default function Manage() {
  return <></>;
}

Manage.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};
