import React from "react";
import { Page } from "@wdp/lib/types/page";
import Error404 from "./404";
import AppLayout from "components/global/AppLayout";

interface Props {
  statusCode?: number;
}

const Error: Page<Props> = ({ statusCode }) => {
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
