"use client";

import AppLayout from "components/global/AppLayout";
import Button from "components/atomic/Button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <AppLayout>
      <div
        className="l-container-max l-flex l-flex--align-center"
        style={{ minHeight: "40vh" }}
      >
        <div className="t-rte t-align-center">
          <h2>A server error occured!</h2>
          <p>{error?.message}</p>
          <Button onClick={reset} size="sm">
            Try Again
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Error;
