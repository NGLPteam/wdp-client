import * as React from "react";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Modal from "../BaseModal";
import * as Styled from "./SearchModal.styles";
import { RouteHelper } from "routes";
import { Select } from "components/forms";
import { SearchModalFragment$key } from "@/relay/SearchModalFragment.graphql";
import { getSchemaTranslationKey } from "helpers";
import SearchBar from "components/composed/search/SearchBar";

type ModalProps = React.ComponentProps<typeof Modal>;

export default function SearchModal({ dialog, data }: Props) {
  const selectId = "searchFilter";
  const searchId = "searchInput";
  const { t } = useTranslation();
  const searchData = useMaybeFragment(fragment, data);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    const communitySearchRoute =
      RouteHelper.findRouteByName("community.search");
    const searchRoute = RouteHelper.findRouteByName("search");

    if (searchData?.slug && communitySearchRoute) {
      router.push({
        pathname: communitySearchRoute.path,
        query: { slug: searchData.slug, ...data },
      });
    } else if (searchRoute) {
      router.push({
        pathname: searchRoute.path,
        query: data,
      });
    }

    if (dialog && dialog.hide) {
      dialog.hide();
    }
  };

  return (
    <Modal dialog={dialog} label={t("search.label")}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <SearchBar id={searchId} {...register("q")} />
        <div className="l-flex l-flex--align-center l-flex--gap-sm">
          <Styled.SelectLabel
            htmlFor={selectId}
            className="t-label-mix a-color-lighter"
          >
            {t("search.search_area_label")}
          </Styled.SelectLabel>
          <Select id={selectId} {...register("schema")}>
            {searchData?.schemaRanks.map(({ slug }) => (
              <option key={slug} value={slug}>
                {startCase(t(getSchemaTranslationKey(slug), { count: 2 }))}
              </option>
            ))}
          </Select>
        </div>
      </Styled.Form>
    </Modal>
  );
}

interface Props extends Pick<ModalProps, "dialog"> {
  data?: SearchModalFragment$key | null;
}

const fragment = graphql`
  fragment SearchModalFragment on Community {
    slug
    name
    schemaRanks {
      slug
    }
  }
`;
