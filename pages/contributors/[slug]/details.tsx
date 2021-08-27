import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import ContributorUpdatePersonForm from "components/composed/contributor/ContributorUpdatePersonForm";

const ContributorDetails: Page = () => {
  return <ContributorUpdatePersonForm data={null} />;
};

ContributorDetails.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};

export default ContributorDetails;
