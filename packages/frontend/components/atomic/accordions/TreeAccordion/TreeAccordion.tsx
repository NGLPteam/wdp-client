import IconFactory from "components/factories/IconFactory";
import styles from "./TreeAccordion.module.css";

export default function TreeAccordion({
  SummaryComponent,
  id,
  children,
  className,
  open = false,
}: Props) {
  return (
    <details id={id} className={className} open={open}>
      <summary className={styles.summary}>
        <IconFactory
          className={styles.toggleIcon}
          icon="plus"
          role="presentation"
          data-closed
        />
        <IconFactory
          className={styles.toggleIcon}
          icon="minus"
          role="presentation"
          data-open
        />
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
  open?: boolean;
}
