import React from "react";
import ReactDOMServer from "react-dom/server";

export default function encodeSvg(
  reactElement: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >
) {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(ReactDOMServer.renderToStaticMarkup(reactElement))
  );
}
