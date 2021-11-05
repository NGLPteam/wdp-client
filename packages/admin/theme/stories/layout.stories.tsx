import React from "react";
import { Story } from "@storybook/react";
import {
  Title,
  Subtitle,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";

export default {
  title: "Styles/Layout",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Base layout utility classes</Subtitle>
          <Primary />
          <ArgsTable />
          <Stories />
        </>
      ),
    },
  },
};

export const Grid: Story = () => (
  <div className="l-container-max">
    <div className="l-grid">
      {[...Array(12).keys()].map((i) => (
        <div className="l-grid__item l-grid__item--1 a-bg-brand100" key={i}>
          1
        </div>
      ))}
      {[...Array(6).keys()].map((i) => (
        <div className="l-grid__item l-grid__item--2 a-bg-brand100" key={i}>
          2
        </div>
      ))}
      {[...Array(4).keys()].map((i) => (
        <div className="l-grid__item l-grid__item--3 a-bg-brand100" key={i}>
          3
        </div>
      ))}
      {[...Array(3).keys()].map((i) => (
        <div className="l-grid__item l-grid__item--4 a-bg-brand100" key={i}>
          4
        </div>
      ))}
      {[...Array(2).keys()].map((i) => (
        <div className="l-grid__item l-grid__item--6 a-bg-brand100" key={i}>
          6
        </div>
      ))}
      <div className="l-grid__item l-grid__item--12 a-bg-brand100">12</div>
    </div>
  </div>
);

export const TwoColumnGrid: Story = ({ leftColumn }) => (
  <>
    <div className="l-grid">
      <div className={`l-grid__item l-grid__item--${leftColumn} a-bg-brand100`}>
        {leftColumn}
      </div>
      <div
        className={`l-grid__item l-grid__item--${
          12 - leftColumn
        } a-bg-brand100`}
      >
        {12 - leftColumn}
      </div>
    </div>
  </>
);
TwoColumnGrid.args = {
  leftColumn: 3,
};

export const Flex: Story = ({ items, gap }) => (
  <>
    <div className={`l-flex ${gap && "l-flex--gap"}`}>
      {[...Array(items).keys()].map((i) => (
        <div className="a-bg-brand100" key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  </>
);
Flex.args = {
  items: 4,
  gap: false,
};

export const Container: Story = ({ container }) => (
  <div className={`l-container-${container} a-bg-brand100`}>{container}</div>
);
Container.args = {
  container: "max",
};
