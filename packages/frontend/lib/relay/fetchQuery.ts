import {
  OperationType,
  GraphQLTaggedNode,
  fetchQuery as relayFetch,
} from "relay-runtime";
import { default as getRelayEnvironment } from "@wdp/lib/app/buildEnvironment";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function fetchQuery<Q extends OperationType>(
  query: GraphQLTaggedNode,
  vars: Record<string, any>,
) {
  const env = getRelayEnvironment();

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
