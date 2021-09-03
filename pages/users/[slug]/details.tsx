import React from "react";
import UserLayout from "components/composed/user/UserLayout";
// import { graphql } from "react-relay";
// import { QueryWrapper } from "components/api";
import { Page } from "types/page";

// TODO: Trigger the query once the User type exists in the API.
const UserDetails: Page = () => {
  return <UserLayout>User Details</UserLayout>;
};

// const query = graphql`
//   query SlugUsersPagesQuery($slug: Slug!) {
//     user(slug: $slug) {
//       ...UserLayoutFragment
//     }
//   }
// `;

export default UserDetails;
