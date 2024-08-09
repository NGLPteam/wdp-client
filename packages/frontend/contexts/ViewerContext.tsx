"use client";

import { createContext, useEffect, useMemo } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { useSession } from "next-auth/react";
import { ViewerContextFragment$key } from "@/relay/ViewerContextFragment.graphql";

const initialState: ViewerContextProps = {
  allowedActions: [],
  uploadAccess: false,
  uploadToken: null,
  avatarUrl: undefined,
};

const ViewerContext = createContext<ViewerContextProps>(initialState);

function ViewerContextProvider({ children, data }: Props) {
  const [viewerData, refetch] = useRefetchableFragment(fragment, data ?? null);

  const { status } = useSession();

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const viewer = useMemo(() => {
    if (viewerData?.viewer) {
      const { avatar, ...viewerProps } = viewerData.viewer;
      const avatarUrl = avatar?.small.png?.url;

      return { avatarUrl, ...viewerProps };
    }

    return initialState;
  }, [viewerData]);

  useEffect(() => {
    if (!isAuthenticated) return;

    try {
      refetch({}, { fetchPolicy: "store-and-network" });
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
  fragment ViewerContextFragment on Query
  @refetchable(queryName: "ViewerRefetchQuery") {
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
