import React from "react";
import BaseLayout from "components/composed/base/BaseLayout";

function Error404() {
  return (
    <BaseLayout>
      <div className="l-container-max l-container-p-lg t-align-center t-rte">
        <h2>404</h2>
        <p>Page not found.</p>
      </div>
    </BaseLayout>
  );
}

export default Error404;
