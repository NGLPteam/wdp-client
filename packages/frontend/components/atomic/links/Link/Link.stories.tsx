import { Story } from "@storybook/react";
import { ArrowLink, DownloadLink, ExternalLink, ReadMoreLink } from "..";
import Link from "./Link";

type Props = React.ComponentProps<typeof Link>;

export default {
  title: "Components/Atomic/Links",
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
  },
};

export const BaseLink: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <Link>Base link</Link>
    <br />
    <Link href="#" {...args} icon="chevronRight">
      Link with icon
    </Link>
  </>
);

export const ArrowLinkPattern: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <ArrowLink href="#" {...args}>
      Arrow link
    </ArrowLink>
  </>
);

export const DownloadLinkPattern: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <DownloadLink href="#" {...args}>
      Download link
    </DownloadLink>
  </>
);

export const ExternalLinkPattern: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <ExternalLink href="#" {...args}>
      External link
    </ExternalLink>
  </>
);

export const ReadMoreLinkPattern: Story<Props> = () => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <ReadMoreLink href="#" />
  </>
);
