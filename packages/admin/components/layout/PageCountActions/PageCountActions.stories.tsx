import { Story } from "@storybook/react";
import PageCountActions from "./";

type Props = React.ComponentProps<typeof PageCountActions>;

export default {
  title: "Components/Layout/PageCountActions",
  component: PageCountActions,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default: Story<Props> = (args) => <PageCountActions {...args} />;

Default.args = {
  pageInfo: {
    page: 1,
    perPage: 20,
    pageCount: 5,
    totalCount: 50,
  },
  selectedCount: 0,
};

export const WithSelectedCount = Default.bind({});

WithSelectedCount.args = {
  pageInfo: {
    page: 1,
    perPage: 20,
    pageCount: 5,
    totalCount: 50,
  },
  selectedCount: 3,
};

export const WithNoData = Default.bind({});

WithNoData.args = {};

export const WithLoadingState = Default.bind({});

WithLoadingState.args = { loading: true };
