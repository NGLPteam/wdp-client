import { Story } from "@storybook/react";
import ArticleSummary from "./";
type Props = React.ComponentProps<typeof ArticleSummary>;

export default {
  title: "Components/Layout/ArticleSummary",
  component: ArticleSummary,
};

const Template: Story<Props> = ({ ...args }) => <ArticleSummary {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  title: "Article Title Goes Here",
  subtitle: "Article Subtitle Goes Here",
  summary:
    "Pharetra laoreet facilisis egestas gravida sit tortor ut. Velit consequat tempus eleifend elit sit eget ultrices. In blandit eget eros, tellus condimentum augue interdum sit tristique",
  contributors: "Contributor Name",
  thumbnail: undefined,
  metadata: "Metadata",
};
