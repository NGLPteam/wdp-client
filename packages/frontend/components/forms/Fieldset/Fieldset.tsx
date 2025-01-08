import styles from "./Fieldset.module.css";

export default function Fieldset({ legend, children }: Props) {
  return (
    <fieldset>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.fields}>{children}</div>
    </fieldset>
  );
}

interface Props {
  legend: string;
  children: React.ReactNode | React.ReactNode[];
}
