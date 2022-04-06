import React from "react";
import AppLayout from "components/global/AppLayout";

export default function PlaceholderPage() {
  return (
    <AppLayout>
      <section className="a-bg-neutral00">
        <div className="l-container-wide l-container-wide--p-lg t-rte">
          <h3>Placeholder Content</h3>
          <p>
            This is a placeholder page. A future version of the WDP will allow
            users to build out informational pages for their installation.
          </p>
        </div>
      </section>
    </AppLayout>
  );
}
