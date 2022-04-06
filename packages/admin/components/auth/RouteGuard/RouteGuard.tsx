import { useEffect } from "react";
import { useSignInOut } from "@wdp/lib/api/hooks/useIsAuthenticated";
import UnauthorizedMessage from "../UnauthorizedMessage";
import { useIsAuthorized } from "hooks";
import { useViewerContext } from "contexts";

export default function RouteGuard({ children }: Props) {
  const { handleSignInOut, isAuthenticated } = useSignInOut();

  // Check if the viewer context is loading (auth state is undetermined)
  const { loading } = useViewerContext();

  useEffect(() => {
    // If user is unauthenticated, redirect to the login screen
    if (isAuthenticated === false) handleSignInOut();
  }, [isAuthenticated, handleSignInOut]);

  const isAuthorized = useIsAuthorized({
    actions: "admin.access",
  });

  // If the user is authorized, show children
  // If we've finished loading the page and the user is not authorized, show message
  return isAuthorized ? (
    <>{children}</>
  ) : loading ? null : (
    <UnauthorizedMessage />
  );
}

interface Props {
  children: React.ReactNode;
}
