import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import UserUpdateForm from "components/composed/user/UserUpdateForm";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function UserDetails({ queryRef }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? <UserUpdateForm data={user} /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} showLoadingCircle {...props} />
);

UserDetails.getLayout = getLayout;

export default UserDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsManageSlugUsersPagesQuery($slug: Slug!) {
    user(slug: $slug) {
      ...UserUpdateFormFragment
    }
  }
`;
