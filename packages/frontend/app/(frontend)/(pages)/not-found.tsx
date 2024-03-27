import AppLayout from "components/global/AppLayout";

function Error404() {
  return (
    <AppLayout>
      <div
        className="l-container-wide t-align-center t-rte"
        style={{ paddingBlockStart: "10%", minHeight: "40vh" }}
      >
        <h2>404</h2>
        <p>Page not found.</p>
      </div>
    </AppLayout>
  );
}

export default Error404;
