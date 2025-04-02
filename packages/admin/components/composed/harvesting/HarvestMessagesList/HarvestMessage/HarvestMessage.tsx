import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import NamedLink from "components/atomic/links/NamedLink";
import type { HarvestMessageFragment$key } from "@/relay/HarvestMessageFragment.graphql";
import * as Styled from "./HarvestMessage.styles";

export default function HarvestMessage({
  data,
  isMapping,
}: {
  data: HarvestMessageFragment$key;
  isMapping?: boolean;
}) {
  const { t } = useTranslation();

  const message = useFragment(fragment, data);

  const { harvestMapping, harvestAttempt, harvestRecord } = message;

  const renderLinks = !!harvestRecord || !!harvestAttempt || !!harvestMapping;

  return (
    <Styled.Grid>
      <Styled.Level>{message.level}</Styled.Level>
      <Styled.Date>{formatDate(message.createdAt)} </Styled.Date>
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
                <span>{t("harvesting.messages.mapping_link")}</span>
              </NamedLink>
            )}
            {!isMapping && !!message.harvestAttempt && (
              <NamedLink
                route="harvestMapping"
                routeParams={{ slug: message.harvestAttempt?.slug }}
                passHref
              >
                <span>{t("harvesting.messages.attempt_link")}</span>
              </NamedLink>
            )}
            {!isMapping && !!message.harvestRecord && (
              <NamedLink
                route="harvestMapping"
                routeParams={{ slug: message.harvestRecord?.slug }}
                passHref
              >
                <span>{t("harvesting.messages.record_link")}</span>
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
