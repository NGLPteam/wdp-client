import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./SearchHero.module.css";

export default function SearchHero({ prompt }: { prompt?: string | null }) {
  const { t } = useTranslation();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: { q?: string }) => {
    const params = new URLSearchParams(searchParams);
    if (data.q) params.set("q", data.q);
    const url = `${
      pathname !== "/" ? pathname : ""
    }/search?${params.toString()}`;

    router.push(url);
  };

  return (
    <section className="a-bg-custom10">
      <form
        className={classNames("l-container-wide", styles.form)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="communityHeroSearch">
            <IconFactory icon="search32" role="presentation" />
            <span className="sr-only">{t("search.label")}</span>
          </label>
          <input
            type="search"
            id="heroSearch"
            className={classNames(styles.input, "t-h4")}
            placeholder={prompt ?? t("search.community_placeholder")}
            {...register("q")}
          />
          <button type="submit" className={styles.button}>
            <IconFactory icon="arrowRight" />
            <span className="sr-only">{t("search.submit")}</span>
          </button>
        </div>
      </form>
    </section>
  );
}
