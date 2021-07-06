import Pagination from ".";

export default {
  title: "Components/Atomic/Pagination",
  component: Pagination,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default = (args) => <Pagination {...args} />;

Default.args = {
  currentPage: 1,
  totalPages: 10,
  onNextPage: "?page=2",
  onPrevPage: "?page=1",
  onSubmit: (value) => {
    console.info(value);
  },
};
