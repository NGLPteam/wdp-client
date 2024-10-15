import type { Slot } from "../../templates.types";

import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";

type HeroDetailData = {
  subheader: Slot;
  subheaderAside: Slot;
  summary: Slot;
  sidebar: Slot;
  metadata: Slot;
  cta: Slot;
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
