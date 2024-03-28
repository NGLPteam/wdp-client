import AppLayout from "components/global/AppLayout";

function Error404() {
  return (
    <AppLayout>
      <div
        className="l-container-wide l-flex l-flex--align-center"
        style={{ minHeight: "40vh" }}
      >
        <div className="t-rte t-align-center">
          <h2>404</h2>
          <p>Page not found.</p>
        </div>
      </div>
    </AppLayout>
  );
}

export default Error404;
