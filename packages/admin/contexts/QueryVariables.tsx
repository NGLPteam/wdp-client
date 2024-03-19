import { useRouter } from "next/router";
import get from "lodash/get";
import {
  EntityOrder,
  SimpleOrder,
  ContributorOrder,
} from "types/graphql-schema";
import { QueryVariablesContextProvider as Provider } from "@wdp/lib/api/contexts";

type Order = EntityOrder & ContributorOrder & SimpleOrder;

export default function QueryVariablesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const page = parseInt(get(router, "query.page", 1) as string);
  const order = (get(router, "query.order") || "RECENT") as Order;

  return <Provider initialVariables={{ page, order }}>{children}</Provider>;
}
