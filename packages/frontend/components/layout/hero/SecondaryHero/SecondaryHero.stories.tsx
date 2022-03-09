import { Story } from "@storybook/react";
import SecondaryHero from "./SecondaryHero";
import { Button, DotList } from "components/atomic";
import CoverImageBase from "components/atomic/images/CoverImage/CoverImageBase";

type Props = React.ComponentProps<typeof SecondaryHero>;

export default {
  title: "Components/Layout/Hero/SecondaryHero",
  component: SecondaryHero,
};

const Template: Story<Props> = (args) => <SecondaryHero {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  title: "Title",
  LeftComponent: <>Left content</>,
  RightComponent: <>Right content</>,
};

export const Issue: Story<Props> = Template.bind({});
Issue.args = {
  title: (
    <>
      Issue title <span className="a-color-lighter">Volume #</span>
    </>
  ),
  ThumbnailComponent: <CoverImageBase title="Issue title" />,
  LeftComponent: (
    <>
      <div>
        <p>Contributor Name </p>
        <DotList className="t-copy-light">
          <li>Metadata A</li>
          <li>Metadata B</li>
          <li>Metadata C</li>
        </DotList>
      </div>
      <p>
        Shields up. I recommend we transfer power to phasers and arm the photon
        torpedoes. Something strange on the detector circuit. The weapons must
        have disrupted our communicators. You saw something as tasty as meat,
        but inorganically materialized out of patterns used by our transporters.
        Captain, the most elementary and valuable statement in science, the
        beginning of wisdom, is I do not know. All transporters off.
      </p>
      <Button icon="download" size="sm">
        Download
      </Button>
    </>
  ),
  RightComponent: (
    <>
      <p>Preprint Version</p>
      <p>CC Licence</p>
      <p>Open Access</p>
      <p>Peer Reviewed</p>
    </>
  ),
};
