import React, { createContext, useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ViewerContextFragment$key } from "@/relay/ViewerContextFragment.graphql";

const initialState: ViewerContextProps = {
  allowedActions: [],
  uploadAccess: false,
  uploadToken: null,
  avatarUrl: undefined,
};

const ViewerContext = createContext<ViewerContextProps>(initialState);

function ViewerContextProvider({ children, data }: Props) {
  const viewerData = useMaybeFragment<ViewerContextFragment$key>(
    fragment,
    data
  );

  const viewer = useMemo(() => {
    if (viewerData?.viewer) {
      const { avatar, ...viewerProps } = viewerData.viewer;
      const avatarUrl = avatar?.small.png?.url;

      return { avatarUrl, ...viewerProps };
    }

    return initialState;
  }, [viewerData]);

  return (
    <ViewerContext.Provider value={viewer}>{children}</ViewerContext.Provider>
  );
}

interface ViewerContextProps {
  name?: string | null;
  allowedActions: readonly string[];
  uploadAccess?: boolean;
  uploadToken?: string | null;
  avatarUrl?: string | null;
}

interface Props {
  children: React.ReactNode;
  data?: ViewerContextFragment$key | null;
}

export default ViewerContext;

export { ViewerContextProvider };

const fragment = graphql`
  fragment ViewerContextFragment on Query {
    viewer {
      name
      allowedActions
      uploadAccess
      uploadToken
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
