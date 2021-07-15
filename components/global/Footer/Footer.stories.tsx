import Footer from "./";
import { Story } from "@storybook/react";
import { ViewerContext, GlobalContextProvider } from "contexts";
type Props = React.ComponentProps<typeof Footer>;

export default {
  title: "Components/Global/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <GlobalContextProvider>
        <Story />
      </GlobalContextProvider>
    ),
  ],
};

export const Default: Story<Props> = () => (
  <ViewerContext.Provider value={{ allowedActions: [] }}>
    <Footer />
  </ViewerContext.Provider>
);

export const WithAllPermissions: Story<Props> = () => (
  <ViewerContext.Provider
    value={{
      allowedActions: ["communities.read", "users.read", "contributors.read"],
    }}
  >
    <Footer />
  </ViewerContext.Provider>
);
