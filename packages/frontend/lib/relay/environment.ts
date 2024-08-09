// See https://github.com/Roshanjossey/nextjs-13-relay
import {
  Environment,
  QueryResponseCache,
  RecordSource,
  Store,
} from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { getToken, setToken } from "@/lib/auth/token";
import { createNetwork } from "./network";

type SharedEnvProps = {
  records?: RecordMap;
  sessionToken?: string;
};

const IS_SERVER = typeof window === typeof undefined;

const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

// Create environment with optional existing records
export default function createEnvironment({
  records,
  sessionToken,
}: SharedEnvProps = {}) {
  const source = new RecordSource(records);

  const store = new Store(source, { queryCacheExpirationTime: 5 * 60 * 1000 });

  return new Environment({
    network: createNetwork({ sessionToken }),
    store,
    isServer: IS_SERVER,
  });
}

export const env = createEnvironment();

// Define and return the current environment
export function getCurrentEnvironment(
  props: {
    sessionToken?: string;
  } = {},
) {
  const sessionToken = props.sessionToken ?? getToken();

  if (props.sessionToken) {
    setToken(props.sessionToken);
  }

  if (IS_SERVER) {
    return createEnvironment({ sessionToken });
  }

  return env;
}
