import * as React from "react";

/**
 * Accessible breadcrumb component with label and description
 * See https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html
 */
function Breadcrumbs({
  breadcrumbs,
  delimiter,
  classes,
  ...wrapperProps
}: Props) {
  /* If this is the last child link, add prop aria-current='page'
   */
  const renderCrumb = (crumb: React.JSX.Element, index: number) => {
    if (index === breadcrumbs.length - 1) {
      return React.cloneElement(crumb, { "aria-current": "page" });
    }

    return crumb;
  };

  if (!breadcrumbs?.length) return null;

  return (
    <nav {...wrapperProps} aria-label="breadcrumb">
      <ol className={classes?.ol}>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className={classes?.li}>
            <>
              {renderCrumb(crumb, index)}
              {delimiter && index < breadcrumbs.length - 1 && (
                <span aria-hidden="true" className={classes?.delimiter}>
                  {delimiter}
                </span>
              )}
            </>
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface Props extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /** Child crumb elements */
  breadcrumbs: React.JSX.Element[];
  /** Delimiter children */
  delimiter?: React.ReactNode;
  /* Specific class names for child tags */
  classes?: {
    delimiter?: string;
    ol?: string;
    li?: string;
  };
}

export default Breadcrumbs;
