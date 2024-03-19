import { useDetailsToggle } from "@wdp/lib/hooks";
import { IconKeys } from "components/factories/IconFactory/IconFactory";
import * as Styled from "./TreeAccordion.styles";

export default function TreeAccordion({
  SummaryComponent,
  children,
  id,
  className,
}: Props) {
  const { ref, icon, onToggle } = useDetailsToggle<IconKeys>({
    iconClosed: "plus",
    iconOpen: "minus",
  });

  return (
    <Styled.Details ref={ref} id={id} className={className}>
      <Styled.Summary onClick={onToggle}>
        <Styled.Toggle icon={icon} />
        {SummaryComponent}
      </Styled.Summary>
      {children}
    </Styled.Details>
  );
}

interface Props {
  SummaryComponent: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  className?: string;
}
