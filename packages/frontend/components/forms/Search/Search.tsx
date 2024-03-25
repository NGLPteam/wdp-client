import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRouteSlug } from "@wdp/lib/routes";
import { IconFactory } from "../../factories";
import * as Styled from "./Search.styles";

export default function Search({
  route = "search",
  placeholder,
  mobile,
  id,
}: Props) {
  const { t } = useTranslation();

  const router = useRouter();

  const { handleSubmit, register } = useForm();

  const slug = useRouteSlug();

  const onSubmit = (data: Record<string, string>) => {
    if (!route) return null;

    const params = new URLSearchParams({
      ...(slug && { slug }),
      q: data.q,
    });

    const url = `/${route}?${params.toString()}`;

    router.push(url);
  };

  return (
    <Styled.SearchForm
      onSubmit={handleSubmit(onSubmit)}
      className="a-button-secondary-sm"
    >
      <Styled.SearchLabel htmlFor={id}>
        <span className="a-hidden">{placeholder || t("search.label")}</span>
        <IconFactory icon="search" role="presentation" />
      </Styled.SearchLabel>
      <Styled.SearchInput
        id={id}
        type="search"
        placeholder={placeholder || t("search.label")}
        className={mobile ? "t-copy-sm" : undefined}
        {...register("q")}
      />
      <Styled.SubmitButton type="submit">
        <IconFactory icon="arrowRight" role="presentation" />
        <span className="a-hidden">{t("search.submit")}</span>
      </Styled.SubmitButton>
    </Styled.SearchForm>
  );
}

interface Props {
  route?: string;
  placeholder?: string;
  mobile?: boolean;
  id: string;
}
