import { useIsAuthorized } from "hooks";

/**
 * Determine if the user is authorized to perform an action.
 * Pass in allowedActions to compare against an array of actions.
 * Leave empty to compare against global viewer actions.
 *
 * @returns child components
 */
export default function Authorize({
  children,
  actions = null,
  allowedActions,
}: Props) {
  const isAuthorized = useIsAuthorized({ actions, allowedActions });

  return isAuthorized ? children : null;
}

interface Props {
  children: JSX.Element;
  actions?: string | string[] | null;
  allowedActions?: string[] | readonly string[];
}
