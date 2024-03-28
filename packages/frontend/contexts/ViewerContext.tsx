"use client";

import { createContext, useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { ViewerContextFragment$key } from "@/relay/ViewerContextFragment.graphql";

const initialState: ViewerContextProps = {
  allowedActions: [],
  uploadAccess: false,
  uploadToken: null,
  avatarUrl: undefined,
};

const ViewerContext = createContext<ViewerContextProps>(initialState);

function ViewerContextProvider({ children, data }: Props) {
  const viewerData = useFragment<ViewerContextFragment$key>(
    fragment,
    data ?? null,
  );

  const viewer = useMemo(() => {
    if (viewerData) {
      const { avatar, ...viewerProps } = viewerData;
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
  data?: ViewerContextFragment$key;
}

export default ViewerContext;

export { ViewerContextProvider };

const fragment = graphql`
  fragment ViewerContextFragment on User {
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
`;
