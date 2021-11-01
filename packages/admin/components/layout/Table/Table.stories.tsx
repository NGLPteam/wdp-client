import { Story } from "@storybook/react";
import Table from "./Table";

type Props = React.ComponentProps<typeof Table>;
type BodyProps = React.ComponentProps<typeof Table.Body>;

export default {
  title: "Components/Layout/Table",
  component: Table,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const headerGroups = [
  {
    headers: [
      {
        id: "name",
        render: () => "Name",
        getHeaderProps: () => ({ key: "1", role: "role" }),
        canSort: true,
      },
      {
        id: "date",
        render: () => "Date of Birth",
        getHeaderProps: () => ({ key: "2", role: "role" }),
        canSort: true,
      },
      {
        id: "place",
        render: () => "Place of Birth",
        getHeaderProps: () => ({ key: "3", role: "role" }),
        canSort: true,
      },
    ],
    getHeaderGroupProps: () => ({ key: "1", role: "role" }),
  },
];

const rows = [
  {
    getRowProps: () => ({ key: "1", role: "role" }),
    cells: [
      {
        render: () => "John Milton",
        getCellProps: () => ({ key: "1", role: "role" }),
      },
      {
        render: () => "December 9, 1608",
        getCellProps: () => ({ key: "2", role: "role" }),
      },
      {
        render: () => "London",
        getCellProps: () => ({ key: "3", role: "role" }),
      },
    ],
  },
  {
    getRowProps: () => ({ key: "2", role: "role" }),
    cells: [
      {
        render: () => "Christina Rossetti",
        getCellProps: () => ({ key: "1", role: "role" }),
      },
      {
        render: () => "December 5, 1830",
        getCellProps: () => ({ key: "2", role: "role" }),
      },
      {
        render: () => "London",
        getCellProps: () => ({ key: "3", role: "role" }),
      },
    ],
  },
];

const selectableRows = rows.map((row) => ({
  ...row,
  getToggleRowSelectedProps: () => ({}),
}));

export const Default: Story<Props & Partial<BodyProps>> = ({
  withRowSelection,
  rows = [],
  ...args
}) => {
  return (
    <div className="l-container-max">
      <Table
        aria-label={args["aria-label"]}
        withRowSelection={withRowSelection}
      >
        <Table.Header
          withCheckbox={withRowSelection}
          headerGroups={headerGroups}
        />
        <Table.Body rows={rows} />
      </Table>
    </div>
  );
};

Default.args = {
  "aria-label": "Example plain table",
  withRowSelection: false,
  rows,
};

export const WithMultiselect = Default.bind({});
WithMultiselect.args = {
  "aria-label": "Example plain table",
  withRowSelection: true,
  rows: selectableRows,
};
