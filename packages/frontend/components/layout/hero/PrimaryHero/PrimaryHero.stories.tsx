import { Story } from "@storybook/react";
import PrimaryHero from "./PrimaryHero";
import { Button, DotList } from "components/atomic";
import HeroImageBase from "components/atomic/images/HeroImage/HeroImageBase";

type Props = React.ComponentProps<typeof PrimaryHero>;

export default {
  title: "Components/Layout/Hero/PrimaryHero",
  component: PrimaryHero,
};

const heroImage = {
  alt: "",
  url: `/images/placeholders/blue-ucla.png`,
};

const Template: Story<Props> = (args) => <PrimaryHero {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  LeftComponent: <>Left content</>,
  RightComponent: <>Right content</>,
};

export const Journal: Story<Props> = Template.bind({});
Journal.args = {
  title: "Journal title",
  subtitle: "Journal subtitle",
  LeftComponent: <>Left content</>,
  RightComponent: <>Right content</>,
  HeroImageComponent: <HeroImageBase {...heroImage} />,
  LogoComponent: <div>[Logo]</div>,
};

export const Article: Story<Props> = Template.bind({});
Article.args = {
  title: "Article title",
  subtitle: <h4 className="t-copy-italic">Article subtitle</h4>,
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
