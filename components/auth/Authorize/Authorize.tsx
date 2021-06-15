// import useIsAuthorizedTo from "../../../hooks/useIsAuthorizedTo";

export default function Authorize({
  behavior = "show",
  children,
  entity,
  isAuthorized = true,
  permissions,
}: Props) {
  //   TODO: Want to use it like:
  //   const isAuthorized = useIsAuthorizedTo(entity, ...permissions);
  //   const isAuthorized = useIsAuthorizedTo("communities", "self.assets.create", "self.update", "items.create");

  if (!isAuthorized && behavior === "show") {
    // handle unauthed. Render an error. Redirect. Can also be composed into another hook to bounce them elsewhere inside
    // of a useEffect
    return <h1>Hacker, go away</h1>;
  }

  if (isAuthorized && behavior === "hide") {
    return <h1>Authorized but hidden</h1>;
  }

  return <>{children}</>;
}

interface Props {
  behavior?: string;
  children: React.ReactNode;
  entity: string;
  isAuthorized?: boolean;
  permissions: string[];
}
