import { Story } from "@storybook/react";
import MetadataProperty from "./MetadataProperty";

type Props = React.ComponentProps<typeof MetadataProperty>;

export default {
  title: "Components/Layout/MetadataProperty",
  component: MetadataProperty,
};

const Template: Story<Props> = (args) => <MetadataProperty {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  label: "Metadata label",
  children: "Metadata text",
};
