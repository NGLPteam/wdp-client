import React, { PropsWithChildren } from "react";
import { ErrorMessage } from "components/atomic";
import { Page } from "types/page";

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

  return (
    <div className="l-container-max">
      <ErrorMessage message={message} name={`${statusCode || ""} Error`} />
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
