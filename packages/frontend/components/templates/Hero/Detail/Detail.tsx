import { graphql, useFragment } from "react-relay";
import { DetailHeroFragment$key } from "@/relay/DetailHeroFragment.graphql";
import { DetailHeroLayoutFragment$key } from "@/relay/DetailHeroLayoutFragment.graphql";
import CoverImage from "./DetailCoverImage";
import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";
import * as Styled from "./Detail.styles";

type HeroDetailProps = {
  data?: DetailHeroFragment$key | null;
  layoutData?: DetailHeroLayoutFragment$key | null;
};

export default function HeroDetail({ data, layoutData }: HeroDetailProps) {
  const content = useFragment(fragment, data);
  const template = useFragment(layoutFragment, layoutData);

  const { slots, definition } = template ?? {};

  return (
    <Styled.Columns>
      <Styled.Left>
        {definition?.showThumbnailImage && (
          <Styled.Thumbnail>
            <CoverImage data={content} />
          </Styled.Thumbnail>
        )}
        <Content data={content} layoutData={template} />
      </Styled.Left>
      <Styled.Right>
        <Sidebar data={slots?.sidebar} />
      </Styled.Right>
    </Styled.Columns>
  );
}

const fragment = graphql`
  fragment DetailHeroFragment on AnyEntity {
    ...DetailCoverImageFragment
    ...DetailContentFragment
  }
`;

const layoutFragment = graphql`
  fragment DetailHeroLayoutFragment on HeroTemplateInstance {
    definition {
      showThumbnailImage
    }
    slots {
      sidebar {
        ...sharedBlockSlotFragment
      }
    }
    ...DetailContentLayoutFragment
  }
`;
