import { Story } from "@storybook/react";
import Link from "../Link";
import ArrowLink from "./ArrowLink";
import DownloadLink from "./DownloadLink";
import ExternalLink from "./ExternalLink";
import ORCIDLink from "./ORCIDLink";
import ReadMoreLink from "./ReadMoreLink";

type Props = React.ComponentProps<typeof Link>;

export default {
  title: "Components/Atomic/Link Patterns",
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

export const ORCIDLinkPattern: Story<Props> = () => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <ORCIDLink href="#">https://orcid.org</ORCIDLink>
  </>
);
