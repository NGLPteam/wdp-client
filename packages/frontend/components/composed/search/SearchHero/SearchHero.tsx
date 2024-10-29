import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { IconFactory } from "components/factories";
import * as Styled from "./SearchHero.styles";

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
      <Styled.Form
        className="l-container-wide"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Styled.SearchWrapper>
          <Styled.SearchIconLabel htmlFor="communityHeroSearch">
            <IconFactory icon="search32" role="presentation" />
            <span className="a-hidden">{t("search.label")}</span>
          </Styled.SearchIconLabel>
          <Styled.SearchInput
            type="search"
            id="heroSearch"
            placeholder={prompt ?? t("search.community_placeholder")}
            {...register("q")}
          />
          <Styled.SearchButton type="submit">
            <IconFactory icon="arrowRight" />
            <span className="a-hidden">{t("search.submit")}</span>
          </Styled.SearchButton>
        </Styled.SearchWrapper>
      </Styled.Form>
    </section>
  );
}
