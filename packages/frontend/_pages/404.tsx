import Head from "next/head";
import { useTranslation } from "react-i18next";
import AppLayout from "components/global/AppLayout";

function Error404() {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <Head>
        <title>{t("app.title")} - 404</title>
      </Head>
      <div className="l-container-max l-container-p-lg t-align-center t-rte">
        <h2>404</h2>
        <p>Page not found.</p>
      </div>
    </AppLayout>
  );
}

export default Error404;
