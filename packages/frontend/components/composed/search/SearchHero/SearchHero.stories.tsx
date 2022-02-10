import { Story } from "@storybook/react";
import SearchHero from "./SearchHero";

type Props = React.ComponentProps<typeof SearchHero>;

export default {
  title: "Components/Search/SearchHero",
  component: SearchHero,
};

const Template: Story<Props> = () => <SearchHero />;

export const Default = Template.bind({});
