import React from "react";
import AppLayout from "components/global/AppLayout";

function Error404() {
  return (
    <AppLayout>
      <div className="l-container-max l-container-p-lg t-align-center t-rte">
        <h2>404</h2>
        <p>Page not found.</p>
      </div>
    </AppLayout>
  );
}

export default Error404;
