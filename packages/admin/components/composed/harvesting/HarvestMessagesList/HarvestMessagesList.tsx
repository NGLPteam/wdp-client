import { graphql, useFragment } from "react-relay";
import { useParams, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NoResultsMessage } from "components/atomic";
import ModelPagination from "components/composed/model/ModelPagination";
import ModelPageCountActions from "components/composed/model/ModelPageCountActions";
import { RouteHelper } from "routes";
import { HarvestMessagesListFragment$key } from "@/relay/HarvestMessagesListFragment.graphql";
import HarvestMessage from "./HarvestMessage";
import * as Styled from "./HarvestMessagesList.styles";

export default function HarvestMessagesList({
  data,
  isMapping,
}: {
  data: HarvestMessagesListFragment$key;
  isMapping?: boolean;
  isAttempt?: boolean;
  isRecord?: boolean;
}) {
  const { nodes: messages, ...pagination } = useFragment(fragment, data) ?? {};

  const { t } = useTranslation();

  const slug = useParams().slug as string;
  const severity = useSearchParams().get("severity");

  const route = RouteHelper.activeRoute();

  const toggle = route ? (
    <Styled.Toggle
      route={route.name}
      routeParams={{ slug: slug }}
      query={
        severity === "TRACE" ? { severity: "INFO" } : { severity: "TRACE" }
      }
      icon="toggle"
      iconChecked={severity === "TRACE"}
    >
      {t("harvesting.debug")}
    </Styled.Toggle>
  ) : undefined;

  return messages && pagination ? (
    <>
      <ModelPageCountActions data={pagination} actions={toggle} />
      {messages?.length ? (
        <ul>
          {messages?.map((m, i) => (
            <HarvestMessage key={i} data={m} isMapping={isMapping} />
          ))}
        </ul>
      ) : (
        <NoResultsMessage />
      )}
      <ModelPagination data={pagination} />
    </>
  ) : null;
}

const fragment = graphql`
  fragment HarvestMessagesListFragment on HarvestMessageConnection {
    nodes {
      ...HarvestMessageFragment
    }
    ...ModelPageCountActionsFragment
    ...ModelPaginationFragment
  }
`;
