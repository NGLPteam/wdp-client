"use client";

import { ErrorBlock } from "@/components/layout";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <ErrorBlock message={error.message} reset={reset} />;
};

export default Error;
