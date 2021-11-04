import { Story } from "@storybook/react";
import Footer from "./";
import { ViewerContext } from "contexts";
type Props = React.ComponentProps<typeof Footer>;

export default {
  title: "Components/Global/Footer",
  component: Footer,
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
