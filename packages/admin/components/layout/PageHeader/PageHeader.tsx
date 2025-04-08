import isNil from "lodash/isNil";
import {
  Breadcrumbs,
  NamedLink,
  SidebarNav,
  MobileSubNav,
  TabNav,
} from "components/atomic";
import { ContentHeader } from "components/layout";
import * as Styled from "./PageHeader.styles";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type ContentHeaderProps = React.ComponentProps<typeof ContentHeader>;
type SidebarNavProps = React.ComponentProps<typeof SidebarNav>;

/**
 * Wrapper for content header, breadcrumbs, and child tabs
 */
const PageHeader = ({
  title,
  breadcrumbsProps,
  tabRoutes,
  tabLinksOnly,
  buttons,
  headerStyle = "primary",
  hideHeader = false,
  sidebarLinks,
}: Props) => {
  return (
    <Styled.Header
      className={hideHeader ? "a-hidden" : ""}
      $headerStyle={headerStyle}
    >
      {!isNil(breadcrumbsProps) ? <Breadcrumbs {...breadcrumbsProps} /> : null}
      <ContentHeader
        headerStyle={headerStyle}
        title={title}
        rightSide={buttons}
      />
      {tabRoutes && (
        <Styled.TabsWrapper>
          <TabNav links={tabRoutes} linksOnly={tabLinksOnly} />
        </Styled.TabsWrapper>
      )}
      {(tabRoutes || sidebarLinks) && (
        <Styled.MobileNavWrapper>
          <MobileSubNav tabRoutes={tabRoutes} sidebarLinks={sidebarLinks} />
        </Styled.MobileNavWrapper>
      )}
    </Styled.Header>
  );
};

interface Link extends NamedLinkProps {
  label?: string;
}

interface Props extends Pick<ContentHeaderProps, "headerStyle"> {
  /** Page title */
  title?: string | null;
  /** Breadcrumb props to be passed down to Breadcrumbs component */
  breadcrumbsProps?: BreadcrumbProps;
  /** Child tabs (TabNav) */
  tabRoutes?: Link[];
  tabLinksOnly?: boolean;
  /** Child buttons */
  buttons?: React.ReactNode;
  /** Hides the header visually, leaves header in for screen readers */
  hideHeader?: boolean;
  /** Sidebar links */
  sidebarLinks?: SidebarNavProps["links"];
}

export default PageHeader;
