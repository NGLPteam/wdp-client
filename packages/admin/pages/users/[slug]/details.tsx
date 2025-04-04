import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserUpdateForm from "components/composed/user/UserUpdateForm";
import UserLayout from "components/composed/user/UserLayout";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserDetails({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? (
    <UserLayout {...layoutProps} data={user}>
      <UserUpdateForm data={user} />
    </UserLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} {...props} />
);

UserDetails.getLayout = getLayout;

export default UserDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
};

const query = graphql`
  query detailsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserUpdateFormFragment
      ...UserLayoutFragment
    }
  }
`;
