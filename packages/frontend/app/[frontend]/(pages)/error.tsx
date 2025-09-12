"use client";

import Button from "components/atomic/Button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div
      className="l-container-wide l-flex l-flex--align-center"
      style={{ minHeight: "40vh", justifyContent: "center" }}
    >
      <div className="t-rte t-align-center">
        <h2>A server error occured!</h2>
        <p>{error?.message}</p>
        <Button onClick={reset} size="sm">
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default Error;
