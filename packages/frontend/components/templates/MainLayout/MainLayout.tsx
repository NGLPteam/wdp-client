"use client";

import { graphql, useFragment } from "react-relay";
import NoContent from "@/components/layout/messages/NoContent";
import Container from "@/components/layout/Container";
import TemplateFactory from "@/components/templates/Factory";
import { MainLayoutFragment$key } from "@/relay/MainLayoutFragment.graphql";
import styles from "./MainLayout.module.css";

export default function MainLayout({
  data,
}: {
  data?: MainLayoutFragment$key | null;
}) {
  const { allHidden, templates } = useFragment(fragment, data) ?? {};

  return allHidden || !templates ? (
    <Container className="my-5">
      <NoContent />
    </Container>
  ) : (
    <div className={styles.grid}>
      {!!templates?.length &&
        templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
    </div>
  );
}

const fragment = graphql`
  fragment MainLayoutFragment on MainLayoutInstance {
    allHidden
    templates {
      ...FactoryTemplatesFragment
    }
  }
`;
