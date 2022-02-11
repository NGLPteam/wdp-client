import { Story } from "@storybook/react";
import SearchResultBase from "./SearchResultBase";
import { DotList, FileThumbnail } from "components/atomic";
import SquareThumbnailBase from "components/atomic/images/SquareThumbnail/SquareThumbnailBase";

type Props = React.ComponentProps<typeof SearchResultBase>;

export default {
  title: "Components/Search/SearchResultBase",
  component: SearchResultBase,
};

const Template: Story<Props> = (args) => <SearchResultBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "Article",
  title:
    "Unlearn What You Have Learned: Recurrent Neural Networks For Pre-Processing Speech Using Sparsified Emotional Speech",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel auctor felis. Praesent dapibus risus nec tincidunt gravida. In sem metus, porttitor sed magna id, cursus pulvinar augue. Aliquam commodo faucibus nibh. Cras at nibh ac nisi porttitor molestie. Mauris ac tempor odio. Pellentesque purus justo, euismod vitae dui et, vulputate lacinia ante. In sed euismod felis, at iaculis diam. Sed sit amet diam accumsan, luctus libero in, luctus ante. Cras non porttitor velit. Quisque et cursus nulla, id iaculis massa. Vestibulum tincidunt vulputate diam eget iaculis. Donec nec elit quis justo auctor tempor sed sit amet tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac fermentum odio. Vivamus id nulla efficitur, pretium eros sed, tempus eros.",
  metadata: (
    <>
      <p>Contributor A, Contributor B, ...</p>
      <p>Journal of Fake Content, vol. 1, no. 4, April 2011</p>
    </>
  ),
  image: (
    <SquareThumbnailBase
      url={"/images/placeholders/blue-ucla.png"}
      size={100}
    />
  ),
  route: "item",
};

export const File = Template.bind({});
File.args = {
  type: "File",
  title: "Lorem Ipsum File",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel auctor felis. Praesent dapibus risus nec tincidunt gravida. In sem metus, porttitor sed magna id, cursus pulvinar augue. Aliquam commodo faucibus nibh. Cras at nibh ac nisi porttitor molestie. Mauris ac tempor odio. Pellentesque purus justo, euismod vitae dui et, vulputate lacinia ante. In sed euismod felis, at iaculis diam. Sed sit amet diam accumsan, luctus libero in, luctus ante. Cras non porttitor velit. Quisque et cursus nulla, id iaculis massa. Vestibulum tincidunt vulputate diam eget iaculis. Donec nec elit quis justo auctor tempor sed sit amet tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac fermentum odio. Vivamus id nulla efficitur, pretium eros sed, tempus eros.",
  metadata: (
    <DotList>
      <li>Image</li>
      <li>12 MB</li>
    </DotList>
  ),
  image: (
    <FileThumbnail url={"/images/placeholders/blue-ucla.png"} size={100} />
  ),
  route: "item.file",
};
