import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import NamedLink from "components/atomic/links/NamedLink";
import type { HarvestMessageFragment$key } from "@/relay/HarvestMessageFragment.graphql";
import * as Styled from "./HarvestMessage.styles";

const LEVEL_MAP = {
  FATAL: Styled.Fatal,
  ERROR: Styled.Error,
  WARN: Styled.Warn,
  INFO: Styled.Info,
  DEBUG: Styled.Info,
  TRACE: Styled.Info,
  "%future added value": null,
};

export default function HarvestMessage({
  data,
  isMapping,
  isAttempt,
  isRecord,
}: {
  data: HarvestMessageFragment$key;
  isMapping?: boolean;
  isAttempt?: boolean;
  isRecord?: boolean;
}) {
  const { t } = useTranslation();

  const message = useFragment(fragment, data);

  const { harvestMapping, harvestAttempt, harvestRecord } = message;

  const renderLinks = !!harvestRecord || !!harvestAttempt || !!harvestMapping;

  const Level = LEVEL_MAP[message.level];

  if (!Level) return null;

  return (
    <Styled.Grid>
      <Level>{message.level}</Level>
      <div>{formatDate(message.createdAt)}</div>
      <Styled.Body>
        <div>{message.message}</div>
        {renderLinks && (
          <Styled.Links>
            {!isMapping && !!message.harvestMapping && (
              <NamedLink
                route="harvestMapping"
                routeParams={{ slug: message.harvestMapping?.slug }}
                passHref
              >
                <a>{t("harvesting.messages.mapping_link")}</a>
              </NamedLink>
            )}
            {!isAttempt && !!message.harvestAttempt && (
              <NamedLink
                route="harvestAttempt"
                routeParams={{ slug: message.harvestAttempt?.slug }}
                passHref
              >
                <a>{t("harvesting.messages.attempt_link")}</a>
              </NamedLink>
            )}
            {!isRecord && !!message.harvestRecord && (
              <NamedLink
                route="harvestRecord"
                routeParams={{ slug: message.harvestRecord?.slug }}
                passHref
              >
                <a>{t("harvesting.messages.record_link")}</a>
              </NamedLink>
            )}
          </Styled.Links>
        )}
        <Styled.Tags>
          {t("harvesting.messages.tags")}
          {message.tags.map((tag) => (
            <Styled.Tag key={tag}>{tag.replaceAll("_", " ")}</Styled.Tag>
          ))}
        </Styled.Tags>
      </Styled.Body>
    </Styled.Grid>
  );
}

const fragment = graphql`
  fragment HarvestMessageFragment on HarvestMessage {
    id
    level
    message
    tags
    createdAt
    harvestMapping {
      slug
    }
    harvestRecord {
      slug
    }
    harvestAttempt {
      slug
    }
  }
`;
