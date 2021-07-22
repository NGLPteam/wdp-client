import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";

export default function ContributorDetail() {
  return <></>;
}

ContributorDetail.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};
