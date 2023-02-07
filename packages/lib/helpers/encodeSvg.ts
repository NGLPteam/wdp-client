import ReactDOMServer from "react-dom/server";

export default function encodeSvg(
  reactElement: React.ReactElement<
    Record<string, unknown>,
    string | React.JSXElementConstructor<Record<string, unknown>>
  >
) {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(ReactDOMServer.renderToStaticMarkup(reactElement))
  );
}
