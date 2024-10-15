import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";
import type { Slot } from "../../templates.types";

type HeroHeaderData = {
  header: Slot;
  headerAside: Slot;
  headerSummary: Slot;
  headerSidebar: Slot;
};

export default function HeroHeader(data: HeroHeaderData) {
  const { headerSidebar, ...titleProps } = data;

  return (
    <Styled.Columns>
      <TitleBlock {...titleProps} />
      <Sidebar sidebar={headerSidebar} />
    </Styled.Columns>
  );
}
