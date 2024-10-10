import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";

type HeroDetailData = {
  subheader: string;
  subheaderAside: string;
  summary: string;
  sidebar: string;
  metadata: string;
  cta: string;
  contributors: boolean;
  thumbnailImage: boolean;
};

export default function HeroDetail(data: HeroDetailData) {
  const { sidebar, ...contentProps } = data;

  return (
    <Styled.Columns>
      {data.thumbnailImage && <Thumbnail />}
      <Content {...contentProps} />
      <Sidebar sidebar={sidebar} />
    </Styled.Columns>
  );
}
