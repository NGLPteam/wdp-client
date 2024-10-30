import { graphql, useFragment } from "react-relay";
import { DetailHeroFragment$key } from "@/relay/DetailHeroFragment.graphql";
import { DetailHeroLayoutFragment$key } from "@/relay/DetailHeroLayoutFragment.graphql";
import CoverImage from "./DetailCoverImage";
import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";
import * as Styled from "./Detail.styles";

type HeroDetailProps = {
  entityData?: DetailHeroFragment$key | null;
  data?: DetailHeroLayoutFragment$key | null;
};

export default function HeroDetail({ data, entityData }: HeroDetailProps) {
  const entity = useFragment(fragment, entityData);
  const template = useFragment(layoutFragment, data);

  const { definition } = template ?? {};

  return (
    <Styled.Columns>
      <Styled.Left>
        {definition?.showThumbnailImage && (
          <Styled.Thumbnail>
            <CoverImage data={entity} />
          </Styled.Thumbnail>
        )}
        <Content data={template} entityData={entity} />
      </Styled.Left>
      <Styled.Right>
        <Sidebar data={template} entityData={entity} />
      </Styled.Right>
    </Styled.Columns>
  );
}

const fragment = graphql`
  fragment DetailHeroFragment on AnyEntity {
    ...DetailCoverImageFragment
    ...DetailContentFragment
    ...DetailSidebarFragment
  }
`;

const layoutFragment = graphql`
  fragment DetailHeroLayoutFragment on HeroTemplateInstance {
    definition {
      showThumbnailImage
    }
    ...DetailContentLayoutFragment
    ...DetailSidebarLayoutFragment
  }
`;
