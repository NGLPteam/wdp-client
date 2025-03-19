import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { PageHeader } from "components/layout";
import HarvestSourceCreateForm from "components/composed/harvesting/HarvestSourceCreateForm";

export default function Harvesting() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={`New ${startCase(t(`glossary.harvest_source`, { count: 1 }))}`}
      />
      <HarvestSourceCreateForm />
    </>
  );
}
