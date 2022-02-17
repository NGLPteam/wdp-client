import { Story } from "@storybook/react";
import Link from "./Link";
import { ICON_MAP } from "components/factories/IconFactory/IconFactory";

type Props = React.ComponentProps<typeof Link>;

export default {
  title: "Components/Atomic/Link",
  component: Link,
  argTypes: {
    className: {
      options: [
        "t-label-lg",
        "t-label-sm",
        "t-label-mix",
        "t-copy",
        "t-copy-sm",
      ],
      control: { type: "select" },
    },
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: "select" },
    },
    iconLeft: {
      control: { type: "boolean" },
    },
  },
};

export const Default: Story<Props> = ({ children, ...args }) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <Link href="#" {...args}>
      {children}
    </Link>
  </>
);
Default.args = {
  children: "A link",
  icon: undefined,
  iconLeft: undefined,
};
