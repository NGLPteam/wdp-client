import { Story } from "@storybook/react";
import ProviderBar from "./";
import { ViewerContext } from "contexts";
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
