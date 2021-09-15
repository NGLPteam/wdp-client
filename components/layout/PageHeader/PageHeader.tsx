import React, { ReactNode } from "react";
import { Breadcrumbs, NamedLink, TabNav } from "components/atomic";
import * as Styled from "./PageHeader.styles";
import { RouteHelper } from "routes";
import isNil from "lodash/isNil";
import { useTranslation } from "react-i18next";
import { ContentHeader } from "components/layout";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type ContentHeaderProps = React.ComponentProps<typeof ContentHeader>;

/**
 * Wrapper for content header, breadcrumbs, and child tabs
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
      <ContentHeader
        headerStyle={headerStyle}
        title={title}
        rightSide={buttons}
      />
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

interface Props extends Pick<ContentHeaderProps, "headerStyle"> {
  /** Page title */
  title?: ReactNode;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  tabRoutes?: Link[];
  /** Child buttons */
  buttons?: React.ReactNode;
  /** Hides the header visually, leaves header in for screen readers */
  hideHeader?: boolean;
}

export default PageHeader;
