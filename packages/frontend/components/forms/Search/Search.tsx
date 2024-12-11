import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import IconFactory from "@/components/factories/IconFactory";
import * as Styled from "./Search.styles";

export default function Search({
  pathname = "/search",
  placeholder,
  mobile,
  id,
  onSubmit,
}: Props) {
  const { t } = useTranslation();

  const router = useRouter();

  const { handleSubmit, register } = useForm();

  const submitHandler = (data: Record<string, string>) => {
    if (!pathname) return null;

    const params = new URLSearchParams({
      q: data.q,
    });

    const url = `${pathname}?${params.toString()}`;

    if (onSubmit) onSubmit();

    router.push(url);
  };

  return (
    <Styled.SearchForm
      onSubmit={handleSubmit(submitHandler)}
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
  pathname?: string;
  placeholder?: string;
  mobile?: boolean;
  id: string;
  onSubmit?: () => void;
}
