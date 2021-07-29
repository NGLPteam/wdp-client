import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";

const ContributorDetail: Page = () => {
  return <></>;
};

ContributorDetail.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};

export default ContributorDetail;
