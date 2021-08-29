import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { Page } from "types/page";

const Contributor: Page = () => {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, moving on...
  router.replace({
    pathname: activeRoute?.redirect,
    query: { ...router.query },
  });

  return null;
};

export default Contributor;
