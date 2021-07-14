import Authorize from "./Authorize";
import { Story } from "@storybook/react";
import { ViewerContext } from "contexts";

type Props = React.ComponentProps<typeof Authorize>;

const viewerData = {
  name: "Viewer Name",
  allowedActions: ["user.create", "user.delete", "user.update"],
};

export default {
  title: "Components/Auth/Authorize",
  component: Authorize,
  decorators: [
    (Story) => (
      <ViewerContext.Provider value={viewerData}>
        <Story />
      </ViewerContext.Provider>
    ),
  ],
};

const Template: Story<Props> = (args) => {
  return (
    <Authorize {...args}>
      <>🎊 Authorized! 🎉</>
    </Authorize>
  );
};

export const IsAuthorized = Template.bind({});
IsAuthorized.args = {
  actions: "self.delete",
  allowedActions: ["self.delete", "self.update"],
};

export const IsNotAuthorized = Template.bind({});
IsNotAuthorized.args = {
  actions: "self.delete",
  allowedActions: ["self.update"],
};

export const IsGloballyAuthorized = Template.bind({});
IsGloballyAuthorized.args = {
  actions: "user.create",
};

export const IsNotGloballyAuthorized = Template.bind({});
IsNotGloballyAuthorized.args = {
  actions: "unknown.action",
};
