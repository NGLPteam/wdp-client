import { useIsUserActionAllowed } from "hooks";

const AuthorizeActions = ({ actions, children }: Props) => {
  const isAllowed = useIsUserActionAllowed(actions);

  return isAllowed ? children : null;
};

interface Props {
  actions: string[];
  children: JSX.Element;
}

export default AuthorizeActions;
