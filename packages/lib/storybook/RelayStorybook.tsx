import { ReactNode, useEffect, useState } from "react";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import type { MockResolvers } from "relay-test-utils/lib/RelayMockPayloadGenerator";

import RelayEnvironmentProvider from "./RelayEnvironmentProvider";

type RelayStorybookProps = {
  children: ReactNode;
  mockResolvers?: MockResolvers;
};

const RelayStorybook = ({
  children,
  mockResolvers = {},
}: RelayStorybookProps) => {
  const [environment] = useState(() => createMockEnvironment());

  useEffect(() => {
    try {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, mockResolvers)
      );
    } catch (err) {
      // handle no operation
      console.info({
        err,
      });
    }
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};

export default RelayStorybook;
