import { isValidElement } from "react";

const htmlRegex = /(<([^>]+)>)|(&#)|(&[a-z]*;)/gi;

export const maybeHtml = (item: string | Record<string, string>) => {
  const hasTags = typeof item === "string" && !!item.match(htmlRegex)?.length;

  /* eslint-disable no-nested-ternary */
  return hasTags ? { dangerouslySetInnerHTML: { __html: item } } : null;
};

export const maybeReactNode = (item: string | Record<string, string>) => {
  const isReactNode =
    isValidElement(item) ||
    (typeof item === "string" && !item.match(htmlRegex)?.length);
  return isReactNode ? item : null;
};
