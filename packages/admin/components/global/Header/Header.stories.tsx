import { Story } from "@storybook/react";
import Header from "./";
import { ViewerContext } from "contexts";
import { Toast, ButtonControl } from "components/atomic";
import { useNotify } from "hooks";

type Props = React.ComponentProps<typeof Header>;

export default {
  title: "Components/Global/Header",
  component: Header,
};

export const Default: Story<Props> = () => (
  <ViewerContext.Provider value={{ allowedActions: [] }}>
    <Header />
  </ViewerContext.Provider>
);

export const WithPartialPermissions: Story<Props> = () => (
  <ViewerContext.Provider
    value={{
      allowedActions: ["communities.read"],
    }}
  >
    <Header />
  </ViewerContext.Provider>
);

export const WithAllPermissions: Story<Props> = () => (
  <ViewerContext.Provider
    value={{
      allowedActions: ["communities.read", "users.read", "contributors.read"],
    }}
  >
    <Header />
  </ViewerContext.Provider>
);

export const WithToasts: Story<Props> = () => {
  const notify = useNotify();

  return (
    <ViewerContext.Provider value={{ allowedActions: [] }}>
      <Header />
      <ButtonControl onClick={() => notify.info("A toast!")}>
        Show a toast message
      </ButtonControl>
      <Toast />
    </ViewerContext.Provider>
  );
};
