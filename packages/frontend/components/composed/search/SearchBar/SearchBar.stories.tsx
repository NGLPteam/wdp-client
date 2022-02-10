import { Story } from "@storybook/react";
import SearchBar from "./SearchBar";

type Props = React.ComponentProps<typeof SearchBar>;

export default {
  title: "Components/Search/SearchBar",
  component: SearchBar,
};

const Template: Story<Props> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "search",
};
