import { graphql, useRefetchableFragment } from "react-relay";

const fragment = graphql`
  fragment UserListDataFragment on UserConnection
  @refetchable {
    
  }
`;
