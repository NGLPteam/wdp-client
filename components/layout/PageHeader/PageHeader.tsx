import React from "react";
import { Breadcrumbs } from "components/atomic";
import * as Styled from "./PageHeader.styles";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const PageHeader = ({ title, breadcrumbsProps, tabs, buttons }: Props) => {
  return (
    <Styled.Header>
      {breadcrumbsProps && <Breadcrumbs {...breadcrumbsProps} />}
      <Styled.TitleWrapper>
        <Styled.H1>{title}</Styled.H1>
        {buttons && <Styled.ButtonsWrapper>{buttons}</Styled.ButtonsWrapper>}
      </Styled.TitleWrapper>
      {tabs && <Styled.TabsWrapper>{tabs}</Styled.TabsWrapper>}
    </Styled.Header>
  );
};

interface Props {
  /** Page title */
  title: string;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  tabs?: JSX.Element;
  /** Child buttons */
  buttons?: JSX.Element;
}

export default PageHeader;
