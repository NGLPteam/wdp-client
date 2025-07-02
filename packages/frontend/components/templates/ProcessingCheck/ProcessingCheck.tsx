"use client";

import { PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { Trans } from "react-i18next";
import { ProcessingCheckFragment$key } from "@/relay/ProcessingCheckFragment.graphql";
import NoContent from "@/components/layout/messages/NoContent";
import Container from "@/components/layout/Container";
import styles from "./ProcessingCheck.module.css";

type Props = PropsWithChildren & {
  data?: ProcessingCheckFragment$key | null;
  entityType: "item" | "collection" | "community";
};

export default function ProcessingCheck({ data, children, entityType }: Props) {
  const { main } = useFragment(fragment, data) ?? {};

  const { allHidden, templates } = main ?? {};

  const noContentMessage = (
    <div className="t-rte t-h4">
      <Trans
        i18nKey="messages.processing"
        values={{ entity: entityType }}
        components={[
          /* eslint-disable-next-line jsx-a11y/heading-has-content */
          <h1 key="heading" className="t-h3 font-medium"></h1>,
          <p key="p1" className="max-w-[850px]"></p>,
          <p key="p2"></p>,
        ]}
      />
    </div>
  );

  return allHidden || !templates?.length ? (
    <Container className={styles.container}>
      <NoContent message={noContentMessage} />
    </Container>
  ) : (
    children
  );
}

const fragment = graphql`
  fragment ProcessingCheckFragment on EntityLayouts {
    main {
      allHidden
      templates {
        ... on TemplateInstance {
          __typename
        }
      }
    }
  }
`;
