import React, { ReactNode } from "react";
import { PageHeader } from "components/layout";
import { useMaybeFragment } from "hooks";
import { graphql } from "react-relay";
import { UserLayoutFragment$key } from "@/relay/UserLayoutFragment.graphql";

type Props = {
  children: ReactNode;
  data?: UserLayoutFragment$key;
};

export default function UserLayout({ children, data }: Props) {
  const user = useMaybeFragment(fragment, data);

  return (
    <section>
      <PageHeader title={user?.name} />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment UserLayoutFragment on User {
    name
  }
`;
