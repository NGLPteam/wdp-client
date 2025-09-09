import {
  OperationType,
  GraphQLTaggedNode,
  fetchQuery as relayFetch,
} from "relay-runtime";
import { auth } from "@/lib/auth/initAuth";
import { getCurrentEnvironment } from "./environment";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function fetchQuery<Q extends OperationType>(
  query: GraphQLTaggedNode,
  vars: Record<string, any>,
) {
  const session = await auth();

  const env = getCurrentEnvironment({ sessionToken: session?.accessToken });

  let data;

  try {
    data = await relayFetch<Q>(env, query, vars, {
      networkCacheConfig: { force: false },
    })
      .toPromise()
      .then((result) => {
        return result;
      });
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
  }

  const records = env.getStore().getSource().toJSON();

  return { data, records };
}
