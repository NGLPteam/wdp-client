import { useTranslation } from "react-i18next";
import { PageHeader, BackToAll } from "components/layout";
import HarvestSourceCreateForm from "components/composed/harvesting/HarvestSourceCreateForm";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import { useViewerContext } from "contexts";

export default function Harvesting() {
  const { t } = useTranslation();

  const { globalAdmin } = useViewerContext();

  if (!globalAdmin)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.harvesting" />
    );

  return (
    <>
      <BackToAll route="harvesting" />
      <PageHeader title={t("harvesting.new_source_title")} />
      <HarvestSourceCreateForm />
    </>
  );
}
