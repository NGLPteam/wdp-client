import React from "react";
import { ErrorMessage } from "components/atomic";

function Error({ statusCode }) {
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
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
