import React from "react";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { Page } from "types/page";

const Manage: Page = () => {
  return <></>;
};

Manage.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};

export default Manage;
