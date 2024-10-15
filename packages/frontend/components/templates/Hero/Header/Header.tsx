import type { HeroImageLayout } from "@/types/graphql-schema";
import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";
import * as Styled from "./Header.styles";
import type { Slot } from "../../templates.types";

type HeroHeaderData = {
  header: Slot | null;
  headerAside: Slot | null;
  headerSummary: Slot | null;
  headerSidebar: Slot | null;
};

export default function HeroHeader(
  data: HeroHeaderData & { layout?: HeroImageLayout },
) {
  const { headerSidebar, layout, ...titleProps } = data;

  const Wrapper = layout ? Styled.Columns : Styled.Inner;

  return (
    <Wrapper $layout={layout}>
      <TitleBlock layout={layout} {...titleProps} />
      <Sidebar sidebar={headerSidebar} />
    </Wrapper>
  );
}
