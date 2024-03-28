import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SearchBar from "components/composed/search/SearchBar";
import { SearchModalFragment$key } from "@/relay/SearchModalFragment.graphql";
import Modal from "../BaseModal";
import SearchModalContent from "./SearchModalContent";
import * as Styled from "./SearchModal.styles";

type ModalProps = React.ComponentProps<typeof Modal>;

function getSearchRouteByType(entity?: { type: string; slug: string }) {
  switch (entity?.type) {
    case "Community":
      return `/communities/${entity.slug}/search`;

    case "Collection":
      return `/collections/${entity.slug}/search`;

    default:
      return "/search";
  }
}

export default function SearchModal({ dialog, data }: Props) {
  const searchId = "searchInput";
  const { t } = useTranslation();
  const searchData = useMaybeFragment(fragment, data);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    const entity = data.entity ? JSON.parse(data.entity) : null;
    const pathname = getSearchRouteByType(entity);

    if (!pathname) {
      console.warn("No search route found.");
      return null;
    }
    const params = new URLSearchParams({ q: data.q });

    router.push(`${pathname}?${params.toString()}`);

    if (dialog && dialog.hide) {
      dialog.hide();
    }
  };

  return (
    <Modal dialog={dialog} label={t("search.label")}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)} data-search-select-portal>
        <SearchBar id={searchId} {...register("q")} />
        {searchData && <SearchModalContent searchData={searchData} />}
      </Styled.Form>
    </Modal>
  );
}

interface Props extends Pick<ModalProps, "dialog"> {
  data?: SearchModalFragment$key | null;
}

const fragment = graphql`
  fragment SearchModalFragment on Entity {
    __typename
    ... on Sluggable {
      slug
    }
    ... on Entity {
      title
    }
    breadcrumbs {
      crumb {
        __typename
        ... on Sluggable {
          slug
        }
        ... on Entity {
          title
        }
      }
    }
  }
`;
