// import useIsAuthorizedTo from "../../../hooks/useIsAuthorizedTo";

export default function Authorize({
  children,
  entity,
  isAuthorized = true,
  permissions,
}: Props) {
  //   TODO: Trying to use it like:
  //   const isAuthorized = useIsAuthorizedTo(entity, ...permissions);
  //   const isAuthorized = useIsAuthorizedTo("communities", "self.assets.create", "self.update", "items.create");

  if (!isAuthorized) {
    // handle unauthed. Render an error. Redirect. Can also be composed into another hook to bounce them elsewhere inside
    // of a useEffect
    return <h1>Hacker, go away</h1>;
  }

  return <>{children}</>;
}

export interface Props {
  children: React.ReactNode;
  entity: string;
  isAuthorized?: boolean;
  permissions: string[];
}
