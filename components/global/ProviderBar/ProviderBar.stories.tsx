import { Story } from "@storybook/react";
import { ViewerContext } from "contexts";
import ProviderBar from "./";
type Props = React.ComponentProps<typeof ProviderBar>;

export default {
  title: "Components/Global/ProviderBar",
  component: ProviderBar,
};

export const Default: Story<Props> = () => (
  <ViewerContext.Provider value={{ allowedActions: [] }}>
    <ProviderBar />
  </ViewerContext.Provider>
);
