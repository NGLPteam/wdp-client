import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { ContentHeader } from "components/layout";
import { Checkbox, Grid, Input } from "components/forms";
import { useFormContext } from "react-hook-form";
import type { HarvestingStatusFragment$key } from "@/relay/HarvestingStatusFragment.graphql";
import * as Styled from "./HarvestingStatus.styles";

export default function HarvestingStatus({
  data,
}: {
  data: HarvestingStatusFragment$key;
}) {
  const { t } = useTranslation();

  const { harvestModificationStatus } = useFragment(fragment, data);

  const {
    register,
    setValue,
    formState: { isSubmitSuccessful },
  } = useFormContext();

  useEffect(() => {
    if (isSubmitSuccessful) setValue("maintainPristineStatus", false);
  }, [isSubmitSuccessful, setValue]);

  if (harvestModificationStatus === "UNHARVESTED") return null;

  const current =
    harvestModificationStatus === "PRISTINE"
      ? t("harvesting.pristine")
      : t("harvesting.modified");

  return (
    <>
      <ContentHeader title={t("glossary.harvesting")} headerStyle="secondary" />
      <Styled.Description>
        {t("harvesting.status_description")}
      </Styled.Description>
      <Grid>
        <Input
          name="status"
          isWide
          label={t("harvesting.status_label")}
          value={current}
          readOnly
        />
        <Checkbox
          label={t("harvesting.pristine_checkbox_label")}
          {...register("maintainPristineStatus")}
        />
      </Grid>
    </>
  );
}

const fragment = graphql`
  fragment HarvestingStatusFragment on Entity {
    ... on Collection {
      harvestModificationStatus
    }
    ... on Item {
      harvestModificationStatus
    }
  }
`;
