export default function Authorize({ children }: Props) {
  const isAuthorized = false;

  return isAuthorized ? children : null;
}

interface Props {
  children: JSX.Element;
}
