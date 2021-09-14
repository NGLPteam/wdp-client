import React, { ReactNode } from "react";
import { Breadcrumbs, NamedLink, TabNav } from "components/atomic";
import * as Styled from "./PageHeader.styles";
import { RouteHelper } from "routes";
import isNil from "lodash/isNil";
import { useTranslation } from "react-i18next";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const PageHeader = ({
  title,
  breadcrumbsProps,
  tabRoutes,
  buttons,
  headerStyle = "primary",
  hideHeader = false,
}: Props) => {
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  return (
    <Styled.Header
      className={hideHeader ? "a-hidden" : ""}
      headerStyle={headerStyle}
    >
      {!isNil(breadcrumbsProps) ? <Breadcrumbs {...breadcrumbsProps} /> : null}
      <Styled.TitleWrapper>
        <Styled.Title as={headerStyle === "primary" ? "h1" : "h2"}>
          {title || "\u00a0"}
        </Styled.Title>
        {buttons && <Styled.ButtonsWrapper>{buttons}</Styled.ButtonsWrapper>}
      </Styled.TitleWrapper>
      {tabRoutes && (
        <Styled.TabsWrapper>
          <TabNav>
            {tabRoutes.map(({ label, ...namedLinkProps }, i) => (
              // router and activeRoute may be missing in Storybook
              <NamedLink key={i} {...namedLinkProps} passHref>
                <TabNav.Tab
                  active={activeRoute?.name.includes(namedLinkProps.route)}
                >
                  {t(`navLabels.${label}`)}
                </TabNav.Tab>
              </NamedLink>
            ))}
          </TabNav>
        </Styled.TabsWrapper>
      )}
    </Styled.Header>
  );
};

interface Link extends NamedLinkProps {
  label?: string;
}

interface Props {
  /** Page title */
  title?: ReactNode;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  tabRoutes?: Link[];
  /** Child buttons */
  buttons?: React.ReactNode;
  headerStyle?: "primary" | "secondary";
  hideHeader?: boolean;
}

export default PageHeader;
