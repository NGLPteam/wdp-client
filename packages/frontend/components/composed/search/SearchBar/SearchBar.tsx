import { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./SearchBar.module.css";

type InputProps = Pick<React.HTMLProps<HTMLInputElement>, "defaultValue">;

function SearchBar(
  { id, ...inputProps }: Props & InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        <IconFactory icon="search" role="presentation" />
        <span className="sr-only">{t("search.label")}</span>
      </label>
      <input
        id={id}
        type="search"
        className={styles.input}
        placeholder={t("search.placeholder")}
        ref={ref}
        {...inputProps}
      />
      <button className={styles.button} type="submit">
        <IconFactory icon="arrowRight" role="presentation" />
        <span className="sr-only">{t("search.submit")}</span>
      </button>
    </div>
  );
}

export default forwardRef(SearchBar);

interface Props {
  id: string;
}
