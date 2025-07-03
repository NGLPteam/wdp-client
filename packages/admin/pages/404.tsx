import { ErrorMessage } from "components/atomic";
import HtmlHead from "components/global/HtmlHead";

function Error404() {
  return (
    <>
      <HtmlHead />
      <div className="l-container-max">
        <ErrorMessage name={`404`} message="Page not found." />
      </div>
    </>
  );
}

export default Error404;
