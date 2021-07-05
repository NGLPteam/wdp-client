import React, { ReactNode } from "react";
import { ContentTitle, Breadcrumbs } from "components/atomic";
import * as Styled from "./PageHeader.styles";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const PageHeader = ({ title, breadcrumbsProps, children }: Props) => {
  return (
    <Styled.Header>
      {breadcrumbsProps && <Breadcrumbs {...breadcrumbsProps} />}
      <ContentTitle>{title}</ContentTitle>
      {children && <Styled.TabsWrapper>{children}</Styled.TabsWrapper>}
    </Styled.Header>
  );
};

interface Props {
  /** Page title */
  title: string;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  children?: ReactNode;
}

export default PageHeader;
