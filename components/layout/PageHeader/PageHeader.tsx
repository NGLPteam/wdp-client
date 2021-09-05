import React, { ReactNode } from "react";
import { Breadcrumbs, NamedLink, TabNav } from "components/atomic";
import * as Styled from "./PageHeader.styles";
import { RouteHelper } from "routes";
import { useRouter } from "next/router";
import isNil from "lodash/isNil";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const PageHeader = ({ title, breadcrumbsProps, tabRoutes, buttons }: Props) => {
  const activeRoute = RouteHelper.activeRoute();
  const router = useRouter();

  return (
    <Styled.Header>
      {!isNil(breadcrumbsProps) ? <Breadcrumbs {...breadcrumbsProps} /> : null}
      <Styled.TitleWrapper>
        <Styled.H1>{title || "\u00a0"}</Styled.H1>
        {buttons && <Styled.ButtonsWrapper>{buttons}</Styled.ButtonsWrapper>}
      </Styled.TitleWrapper>
      {tabRoutes && (
        <Styled.TabsWrapper>
          <TabNav>
            {tabRoutes.map(({ route, label }, i) => (
              // router and activeRoute may be missing in Storybook
              <NamedLink key={i} route={route} query={router?.query} passHref>
                <TabNav.Tab active={activeRoute?.name === route}>
                  {label}
                </TabNav.Tab>
              </NamedLink>
            ))}
          </TabNav>
        </Styled.TabsWrapper>
      )}
    </Styled.Header>
  );
};

interface Props {
  /** Page title */
  title?: ReactNode;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  tabRoutes?: { label: string; route: NamedLinkProps["route"] }[];
  /** Child buttons */
  buttons?: React.ReactNode;
}

export default PageHeader;
