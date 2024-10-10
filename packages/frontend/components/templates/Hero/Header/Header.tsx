import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";

type HeroHeaderData = {
  header: string;
  headerAside: string;
  headerSummary: string;
  headerSidebar: string;
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
