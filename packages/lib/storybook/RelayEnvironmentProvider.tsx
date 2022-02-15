import { useMemo } from "react";

import { ReactRelayContext } from "react-relay";

import { Environment } from "relay-runtime";

type Props = {
  children: React.ReactNode;
  environment: Environment;
};

// Example from https://github.com/sibelius/relay-storybook
const RelayEnvironmentProvider = (props: Props) => {
  const { children, environment } = props;
  // We're setting empty variables here to make Flow happy
  // and for backwards compatibility, while we remove variables from context
  // in favor of fragment ownership
  const context = useMemo(() => {
    return { environment, variables: {} };
  }, [environment]);

  return (
    <ReactRelayContext.Provider value={context}>
      {children}
    </ReactRelayContext.Provider>
  );
};

export default RelayEnvironmentProvider;
