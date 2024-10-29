import { useFragment } from "react-relay";
import { maybeHtml } from "@/components/templates/helpers/maybeHtml";
import { templateSlotBlockFragment } from "@/components/templates/shared.graphql";
import { sharedBlockSlotFragment$key } from "@/relay/sharedBlockSlotFragment.graphql";

export default function Sidebar({
  data,
}: {
  data?: sharedBlockSlotFragment$key | null;
}) {
  const sidebar = useFragment(templateSlotBlockFragment, data);

  return (
    sidebar?.valid &&
    !!sidebar?.content && <aside {...maybeHtml(sidebar.content)} />
  );
}
