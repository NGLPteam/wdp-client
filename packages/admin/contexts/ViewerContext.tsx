import React, { createContext, useMemo } from "react";
import { graphql } from "react-relay";
import { ViewerContextQuery } from "__generated__/ViewerContextQuery.graphql";
import useAuthenticatedQuery from "@wdp/lib/api/hooks/useAuthenticatedQuery";

const initialState: ViewerContextProps = {
  allowedActions: [],
  uploadAccess: false,
  uploadToken: null,
  avatarUrl: undefined,
};

const ViewerContext = createContext<ViewerContextProps>(initialState);

function ViewerContextProvider({ children }: Props) {
  const { data } = useAuthenticatedQuery<ViewerContextQuery>(query);

  const viewer = useMemo(() => {
    if (data?.viewer) {
      const { avatar, ...viewerProps } = data.viewer;
      const avatarUrl = avatar?.small.png?.url;

      return { avatarUrl, ...viewerProps };
    }

    return initialState;
  }, [data]);

  return (
    <ViewerContext.Provider value={viewer}>{children}</ViewerContext.Provider>
  );
}

interface ViewerContextProps {
  name?: string | null;
  allowedActions: readonly string[];
  uploadAccess?: boolean;
  uploadToken?: string | null;
  avatarUrl?: string;
}

interface Props {
  children: React.ReactNode;
}

export default ViewerContext;

export { ViewerContextProvider };

const query = graphql`
  query ViewerContextQuery {
    viewer {
      name
      avatar {
        small {
          png {
            url
            alt
          }
        }
      }
    }
  }
`;
