import { ButtonControl } from "components/atomic/buttons";
import PageCountActions from "./";

export default {
  title: "Components/Layout/PageCountActions",
  component: PageCountActions,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default = (args) => (
  <PageCountActions
    {...args}
    multiselectActions={[
      <ButtonControl key="delete" icon="delete">
        Delete
      </ButtonControl>,
    ]}
  />
);

Default.args = {
  pageInfo: {
    page: 1,
    perPage: 10,
    pageCount: 5,
    totalCount: 50,
  },
  selectedCount: 0,
};

export const WithSelectedCount = Default.bind({});

WithSelectedCount.args = {
  pageInfo: {
    page: 1,
    perPage: 10,
    pageCount: 5,
    totalCount: 50,
  },
  selectedCount: 3,
};
