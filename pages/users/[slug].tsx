import React from "react";
import UserLayout from "components/composed/user/UserLayout";
import { Page } from "types/page";

const UserDetail: Page = () => {
  return <></>;
};

UserDetail.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserDetail;
