import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  ContentSidebar,
  ContentHeader,
  PageHeader,
  BackToAll,
} from "components/layout";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
} from "hooks";
import { RouteHelper } from "routes";
import HtmlHead from "components/global/HtmlHead";
import { UserLayoutFragment$key } from "@/relay/UserLayoutFragment.graphql";
import UserResetPasswordModal from "../UserResetPasswordModal";

type Props = {
  children: React.ReactNode;
  showSidebar?: boolean;
  data?: UserLayoutFragment$key | null;
  useRouteHeader?: boolean;
};

export default function UserLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: Props) {
  const user = useMaybeFragment(fragment, data);
  const { current: memoizedUser } = useLatestPresentValue(user);
  const slug = useRouteSlug() || undefined;
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const manageRoutes = useChildRouteLinks("user", { slug });

  return (
    <>
      <HtmlHead title={memoizedUser?.name ?? undefined} />
      <section>
        <BackToAll route="users" />
        <PageHeader
          title={memoizedUser?.name}
          sidebarLinks={manageRoutes}
          buttons={
            <UserResetPasswordModal
              userId={memoizedUser?.id}
              message={t("actions.reset_password.body_user", {
                name: memoizedUser?.name,
              })}
            />
          }
        />
        {showSidebar ? (
          <ContentSidebar sidebarLinks={manageRoutes}>
            {useRouteHeader && activeRoute && activeRoute.label && (
              <ContentHeader
                headerStyle="secondary"
                title={t(activeRoute.label)}
              />
            )}
            {children}
          </ContentSidebar>
        ) : (
          children
        )}
      </section>
    </>
  );
}

const fragment = graphql`
  fragment UserLayoutFragment on User {
    id
    name
    email
  }
`;
