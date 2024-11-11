import { graphql, useFragment } from "react-relay";
import { DetailHeroFragment$key } from "@/relay/DetailHeroFragment.graphql";
import CoverImage from "./DetailCoverImage";
import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";
import * as Styled from "./Detail.styles";

type HeroDetailProps = {
  data?: DetailHeroFragment$key | null;
};

export default function HeroDetail({ data }: HeroDetailProps) {
  const template = useFragment(fragment, data);

  const { definition, entity } = template ?? {};

  return (
    <Styled.Columns>
      <Styled.Left>
        {definition?.showThumbnailImage && (
          <Styled.Thumbnail>
            <CoverImage data={entity} />
          </Styled.Thumbnail>
        )}
        <Content data={template} />
      </Styled.Left>
      <Styled.Right>
        <Sidebar data={template} />
      </Styled.Right>
    </Styled.Columns>
  );
}

const fragment = graphql`
  fragment DetailHeroFragment on HeroTemplateInstance {
    entity {
      ...DetailCoverImageFragment
    }
    definition {
      showThumbnailImage
    }
    ...DetailContentFragment
    ...DetailSidebarFragment
  }
`;
