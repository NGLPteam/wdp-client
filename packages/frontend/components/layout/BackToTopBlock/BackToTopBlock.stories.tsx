import { Story } from "@storybook/react";
import { ICON_KEYS } from "../../factories/IconFactory";
import BackToTopBlock from "./";
type Props = React.ComponentProps<typeof BackToTopBlock>;

export default {
  title: "Components/Layout/BackToTopBlock",
  component: BackToTopBlock,
  argTypes: {
    icon: {
      options: [null, ...ICON_KEYS],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = ({ ...args }) => (
  <BackToTopBlock {...args} className="l-container-wide">
    <div className="t-rte">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
      <ul>
        <li>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
        </li>
        <li>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
          mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </li>
        <li>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </li>
        <li>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
          ultrices ut, elementum vulputate, nunc.
        </li>
      </ul>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
    </div>
  </BackToTopBlock>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {};
