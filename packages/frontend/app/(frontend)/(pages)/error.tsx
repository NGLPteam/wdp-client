"use client";

import AppLayout from "components/global/AppLayout";
import Button from "components/atomic/Button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <AppLayout>
      <div
        className="l-container-max t-align-center t-rte"
        style={{ paddingBlockStart: "10%", minHeight: "40vh" }}
      >
        <h2>A server error occured!</h2>
        <p>{error?.message}</p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </AppLayout>
  );
};

export default Error;
