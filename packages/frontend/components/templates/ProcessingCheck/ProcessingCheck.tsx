"use client";

import { PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { ProcessingCheckFragment$key } from "@/relay/ProcessingCheckFragment.graphql";
import Container from "@/components/layout/Container";
import ProcessingMessage from "./ProcessingMessage";
import styles from "./ProcessingCheck.module.css";

type Props = PropsWithChildren & {
  data?: ProcessingCheckFragment$key | null;
  entityType: "item" | "collection" | "community";
};

export default function ProcessingCheck({ data, children, entityType }: Props) {
  const { main } = useFragment(fragment, data) ?? {};

  const { allHidden, templates } = main ?? {};

  return allHidden || !templates?.length ? (
    <Container className={styles.container}>
      <ProcessingMessage entityType={entityType} />
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
