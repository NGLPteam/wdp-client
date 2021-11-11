// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CssContent = string | any;

export function noInsetSupport(content: CssContent) {
  return `
      @supports not (inset: 1px) {
        ${content}
      }
    `;
}

export function noFlexGapSupport(content: CssContent) {
  return `
      .no-flex-gap & {
        ${content}
      }
    `;
}
