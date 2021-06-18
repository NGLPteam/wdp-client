import React from "react";
import { Story } from "@storybook/react";

export default {
  title: "Styles/Typography",
};

export const Headers: Story = () => (
  <div>
    <h1>H1 Headlines: Karla Medium 30px</h1>
    <h2>H2 Headlines: Karla SemiBold 22px</h2>
    <h3>H3 Headlines: Karla Medium 18px</h3>
  </div>
);

export const Body: Story = () => (
  <div>
    <p>Body - Regular: Karla Regular 16px</p>
    <p>
      <strong>Body - Medium: Karla Medium 16px</strong>
    </p>
    <p className="t-copy-sm">Body Small - Regular: Karla Regular 14px</p>
  </div>
);

export const Label: Story = () => (
  <div>
    <p className="t-label-lg">LABEL Large: Karla SEMI-BOLD 15px/24px</p>
    <p className="t-label-md">LABEL Medium: Karla BOLD SEMI-BOLD 14px/20px</p>
    <p className="t-label-sm">
      LABEL small: Karla SEMIBOLD SEMI-BOLD 13px/20px
    </p>
  </div>
);

const PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tempor dui, vitae aliquam nisi facilisis eu. Nunc vitae posuere purus, ac gravida arcu. Sed finibus quam nec risus hendrerit, sit amet dictum massa porta. Quisque ut tortor maximus nibh ornare facilisis. Ut vitae nisi eu velit tempus vehicula eget eget dui. Proin ultricies turpis eget tortor sagittis, at consectetur lectus vehicula.";
const DEMO_ARRAY = [1, 2, 3];

export const RichText: Story = () => (
  <div className="t-rte">
    <h1>This is an HTML kitchen sink inside a Rich Text class</h1>
    <p>
      Showing some <em>emphasis</em>, <strong>important</strong>, and{" "}
      <a href="#">link text</a>. {PARAGRAPH}
    </p>

    <h2>A level 2 heading</h2>
    <p>{PARAGRAPH}</p>

    <h3>A level 3 heading</h3>
    <p>{PARAGRAPH}</p>
    <p>{PARAGRAPH}</p>

    <h4>A level 4 heading</h4>
    <h5>A level 5 heading</h5>
    <h6>A level 6 heading, should be rarely used</h6>

    <h3>Lists</h3>
    <ul>
      {DEMO_ARRAY.map((i) => (
        <li key={i}>List item</li>
      ))}
      <li>
        List item
        <ul>
          {DEMO_ARRAY.map((i) => (
            <li key={i}>Child list item</li>
          ))}
        </ul>
      </li>
      {DEMO_ARRAY.map((i) => (
        <li key={i}>List item</li>
      ))}
    </ul>
    <ol>
      {DEMO_ARRAY.map((i) => (
        <li key={i}>List item</li>
      ))}
      <li>
        List item
        <ol>
          {DEMO_ARRAY.map((i) => (
            <li key={i}>Child list item</li>
          ))}
        </ol>
      </li>
      {DEMO_ARRAY.map((i) => (
        <li key={i}>List item</li>
      ))}
    </ol>

    <h3>Tables</h3>
    <table>
      <tbody>
        <tr>
          <th>Table Heading</th>
          <th>Table Heading</th>
        </tr>
        {DEMO_ARRAY.map((i) => (
          <tr key={i}>
            <td>table data</td>
            <td>table data</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3>Blockquotes</h3>
    <blockquote>
      <p>{PARAGRAPH}</p>
    </blockquote>

    <h3>Definition list</h3>
    <dl>
      <dt>Lorem ipsum dolor sit amet</dt>
      <dd>{PARAGRAPH}</dd>
      <dt>Lorem ipsum dolor sit amet</dt>
      <dd>{PARAGRAPH}</dd>
    </dl>
  </div>
);
