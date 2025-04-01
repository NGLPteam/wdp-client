import { Trans, useTranslation } from "react-i18next";
import UnauthorizedMessage from "../UnauthorizedMessage";

export default function RouteUnauthorizedMessage({
  i18nKey,
}: {
  i18nKey: string;
}) {
  const { t } = useTranslation();

  const message = (
    <div className="t-rte">
      <p>
        {/* eslint-disable-next-line react/jsx-key */}
        <Trans i18nKey={i18nKey} components={[<br />]} />
      </p>
    </div>
  );

  return (
    <UnauthorizedMessage title={t("messages.unauthorized")} message={message} />
  );
}
