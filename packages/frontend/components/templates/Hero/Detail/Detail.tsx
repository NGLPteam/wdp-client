import { graphql, useFragment } from "react-relay";
import { DetailHeroFragment$key } from "@/relay/DetailHeroFragment.graphql";
import CoverImage from "./DetailCoverImage";
import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";
import * as Styled from "./Detail.styles";
import type { Slot } from "../../templates.types";

type HeroDetailData = {
  subheader: Slot | null;
  subheaderAside: Slot | null;
  summary: Slot | null;
  sidebar: Slot | null;
  metadata: Slot | null;
  cta: Slot | null;
  contributors: boolean;
  thumbnailImage: boolean;
  data?: DetailHeroFragment$key | null;
};

export default function HeroDetail(props: HeroDetailData) {
  const { sidebar, data, ...contentProps } = props;

  const content = useFragment(fragment, data);

  return (
    <Styled.Columns>
      <Styled.Left>
        {props.thumbnailImage && (
          <Styled.Thumbnail>
            <CoverImage data={content} />
          </Styled.Thumbnail>
        )}
        <Content data={content} {...contentProps} />
      </Styled.Left>
      <Styled.Right>
        <Sidebar sidebar={sidebar} />
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
