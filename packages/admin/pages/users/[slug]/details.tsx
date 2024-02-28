import { graphql } from "relay-runtime";
import UserLayoutQuery from "components/composed/user/UserLayoutQuery";
import UserUpdateForm from "components/composed/user/UserUpdateForm";
import { LoadingCircle } from "components/atomic";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserDetails({ data }: Props) {
  return data && data.user ? (
    <UserUpdateForm data={data.user} />
  ) : (
    <LoadingCircle className="l-page-loading" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <UserLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
UserDetails.getLayout = getLayout;

export default UserDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserUpdateFormFragment
      ...UserLayoutQueryFragment
    }
  }
`;
