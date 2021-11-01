import React from "react";
import { Story } from "@storybook/react";
import {
  Title,
  Subtitle,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs/blocks";

export default {
  title: "Styles/Appearance",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Base appearance styling and utility classes</Subtitle>
          <Primary />
          <ArgsTable />
          <Stories />
        </>
      ),
    },
  },
};

export const BackgroundColors: Story = () => (
  <div>
    <div className="a-bg-brand100">a-bg-brand100</div>
    <div className="a-bg-brand90">a-bg-brand90</div>
    <div className="a-bg-neutral00">a-bg-neutral00</div>
  </div>
);

export const TextColors: Story = () => (
  <div>
    <p>
      Text colors are based on the background class. Change the theme to see how
      the text color relates to background color.
    </p>
    <div className="a-color-accent">a-color-accent</div>
    <div className="a-color-light">a-color-light</div>
    <div className="a-color-lighter">a-color-lighter</div>
  </div>
);
