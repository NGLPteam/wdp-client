import React from "react";
import ReactDOMServer from "react-dom/server";

export default function encodeSvg(reactElement: React.ReactNode) {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(ReactDOMServer.renderToStaticMarkup(reactElement))
  );
}
