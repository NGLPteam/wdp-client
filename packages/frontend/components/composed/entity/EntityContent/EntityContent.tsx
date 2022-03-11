import React from "react";
// import { graphql } from "react-relay";
// import { EntityContentFragment$key } from "@/relay/EntityContentFragment.graphql";

export default function EntityContent({ children }: Props) {
  return <>{children}</>;
}

interface Props {
  // data?: EntityContentFragment$key | null;
  children?: React.ReactNode;
}

// const fragment = graphql`
//   fragment EntityContentFragment on Entity {
//     __typename
//     orderings {
//       edges {
//         node {
//           identifier
//           children {
//             pageInfo {
//               totalCount
//             }
//           }
//         }
//       }
//     }
//     pages {
//       nodes {
//         slug
//       }
//     }
//   }
// `;
