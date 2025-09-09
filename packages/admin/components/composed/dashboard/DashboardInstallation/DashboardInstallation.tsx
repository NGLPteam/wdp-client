import { formatNumberToString } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { ContentHeader } from "components/layout";
import { ButtonControlConfirm } from "components/atomic";
import { DashboardInstallationFragment$key } from "@/relay/DashboardInstallationFragment.graphql";
import * as Styled from "./DashboardInstallation.styles";

export default function DashboardInstallation({ data }: Props) {
  const queryData = useFragment(fragment, data);

  const { t } = useTranslation();

  const clearCacheButton = (
    <ButtonControlConfirm
      modalLabel={t("messages.clear_cache.confirm_label")}
      modalBody={t("messages.clear_cache.confirm_body")}
      icon="clear"
      onClick={() => {}}
      actions="self.update"
    >
      {t("common.clear_cache")}
    </ButtonControlConfirm>
  );

  return (
    <section>
      <ContentHeader
        title={t("dashboard.installation_header")}
        headerStyle="secondary"
        rightSide={clearCacheButton}
      />
      <Styled.List>
        <Styled.Item>
          <Styled.ItemLabel>
            {t("dashboard.current_version_label")}
          </Styled.ItemLabel>
          <Styled.ItemValue>{process.env.NEXT_PUBLIC_VERSION}</Styled.ItemValue>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>{t("glossary.community_other")}</Styled.ItemLabel>
          <Styled.ItemValue>
            {formatNumberToString(queryData.communities?.pageInfo?.totalCount)}
          </Styled.ItemValue>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>{t("glossary.collection_other")}</Styled.ItemLabel>
          <Styled.ItemValue>
            {formatNumberToString(
              queryData.viewer?.allCollections?.pageInfo?.totalCount,
            )}
          </Styled.ItemValue>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>{t("glossary.item_other")}</Styled.ItemLabel>
          <Styled.ItemValue>
            {formatNumberToString(
              queryData.viewer?.allItems?.pageInfo?.totalCount,
            )}
          </Styled.ItemValue>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>{t("glossary.user_other")}</Styled.ItemLabel>
          <Styled.ItemValue>
            {formatNumberToString(queryData.users?.pageInfo?.totalCount)}
          </Styled.ItemValue>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>{t("glossary.contributor_other")}</Styled.ItemLabel>
          <Styled.ItemValue>
            {formatNumberToString(queryData.contributors?.pageInfo?.totalCount)}
          </Styled.ItemValue>
        </Styled.Item>
      </Styled.List>
    </section>
  );
}

interface Props {
  data: DashboardInstallationFragment$key;
}

const fragment = graphql`
  fragment DashboardInstallationFragment on Query {
    communities {
      pageInfo {
        totalCount
      }
    }
    contributors {
      pageInfo {
        totalCount
      }
    }
    users {
      pageInfo {
        totalCount
      }
    }
    viewer {
      allCollections: collections(nodeFilter: ROOTS_AND_LEAVES) {
        pageInfo {
          totalCount
        }
      }
      allItems: items(nodeFilter: ROOTS_AND_LEAVES) {
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
