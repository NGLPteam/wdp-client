import React, { ReactNode } from "react";
import { ContentTitle, Breadcrumbs } from "components/atomic";
import * as Styled from "./PageHeader.styles";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;

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
  title: string;
  breadcrumbsProps?: BreadcrumbProps;
  children?: ReactNode; // TODO: Set to be strictly TabNav
}

export default PageHeader;
