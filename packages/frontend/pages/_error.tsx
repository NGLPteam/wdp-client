import { Page } from "@wdp/lib/types/page";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import AppLayout from "components/global/AppLayout";
import Error404 from "./404";

interface Props {
  statusCode?: number;
}

const Error: Page<Props> = ({ statusCode }: Props) => {
  const { t } = useTranslation();

  const message = (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );

  return statusCode === 404 ? (
    <Error404 />
  ) : (
    <AppLayout>
      <Head>
        <title>
          {t("app.title")} {statusCode ? ` - ${statusCode}` : ""}
        </title>
      </Head>
      <div className="l-container-max l-container-p-lg t-align-center t-rte">
        <h2>{statusCode}</h2>
        <p>{message}</p>
      </div>
    </AppLayout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
