import React from "react";
import { ErrorMessage } from "components/atomic";

function Error404() {
  return (
    <div className="l-container-max">
      <ErrorMessage name={`404`} message="Page not found." />
    </div>
  );
}

export default Error404;
