import { Story } from "@storybook/react";
import { ButtonControl, Image } from "components/atomic";
import Grid from "./";

type Props = React.ComponentProps<typeof Grid>;

export default {
  title: "Components/Layout/Grid",
  component: Grid,
  decorators: [
    (Story: Story) => (
      <div className="l-container-max">
        <Story />
      </div>
    ),
  ],
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

function renderRandImage() {
  const width = Math.round(Math.random()) === 1 ? 180 * 2 : 150 * 2;
  const height = 180 * 2;

  return (
    <Image
      image={{
        height: height,
        width: width,
        alt: "Alt text",
        url: `https://via.placeholder.com/${width}x${height}/E1E1E5/67676B`,
      }}
    />
  );
}

function renderGridContent(i: number) {
  return (
    <>
      <div className="t-weight-md a-link">Item {i}</div>
      <div>Metadata</div>
      <div>Metadata</div>
    </>
  );
}

const gridArray = Array.from(Array(20), (x, i) => i);

export const Default: Story<Props> = () => (
  <Grid>
    <>
      {gridArray.map((i) => (
        <Grid.Item key={i}>{renderGridContent(i)}</Grid.Item>
      ))}
    </>
  </Grid>
);
Default.args = {};

export const WithImages: Story<Props> = () => (
  <Grid>
    <>
      {gridArray.map((i) => (
        <Grid.Item key={i} thumbnail={renderRandImage()}>
          {renderGridContent(i)}
        </Grid.Item>
      ))}
    </>
  </Grid>
);
WithImages.args = {};

export const WithCheckboxes: Story<Props> = ({ showCheckboxes }) => (
  <Grid showCheckboxes={showCheckboxes}>
    <>
      {gridArray.map((i) => (
        <Grid.Item
          key={i}
          checkboxProps={{ "aria-label": "Select item" }}
          thumbnail={renderRandImage()}
        >
          {renderGridContent(i)}
        </Grid.Item>
      ))}
    </>
  </Grid>
);
WithCheckboxes.args = {
  showCheckboxes: false,
};

export const WithActions: Story<Props> = ({ showCheckboxes }) => (
  <Grid showCheckboxes={showCheckboxes}>
    <>
      {gridArray.map((i) => (
        <Grid.Item
          key={i}
          checkboxProps={{ "aria-label": "Select item" }}
          actions={<ButtonControl icon="edit" aria-label="Delete item" />}
          thumbnail={renderRandImage()}
        >
          {renderGridContent(i)}
        </Grid.Item>
      ))}
    </>
  </Grid>
);
WithActions.args = {
  showCheckboxes: false,
};
