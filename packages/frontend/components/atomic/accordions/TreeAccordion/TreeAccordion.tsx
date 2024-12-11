import IconFactory from "components/factories/IconFactory";
import styles from "./TreeAccordion.module.css";

export default function TreeAccordion({
  SummaryComponent,
  id,
  children,
  className,
}: Props) {
  return (
    <details id={id} className={className}>
      <summary className={styles.summary}>
        <IconFactory icon="plus" role="presentation" data-closed />
        <IconFactory icon="minus" role="presentation" data-open />
        {SummaryComponent}
      </summary>
      {children}
    </details>
  );
}

interface Props {
  SummaryComponent: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  className?: string;
}
