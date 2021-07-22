import React from "react";
import UserLayout from "components/composed/user/UserLayout";

export default function UserDetail() {
  return <></>;
}

UserDetail.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};
