import { useTranslation } from "react-i18next";
import { PageHeader, BackToAll } from "components/layout";
import HarvestSourceCreateForm from "components/composed/harvesting/HarvestSourceCreateForm";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import HtmlHead from "components/global/HtmlHead";
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
      <HtmlHead />
      <BackToAll route="harvesting" />
      <PageHeader title={t("harvesting.new_source_title")} />
      <HarvestSourceCreateForm />
    </>
  );
}
