import React from "react";
import { MessageBlock } from "components/atomic";
export default function Home() {
  const content = (
    <div>
      <p>
        Welcome to the WDP Admin Interface, a tool that allows non-technical
        users to manage content stored in the WDP API. This tool is under active
        development as part of the Next Generation Library publishing project.
      </p>

      <p style={{ marginTop: 30 }}>
        In the future, this screen will be the Admin Interface homepage, and
        will include high level information about the content stored in this
        instance.
      </p>

      <p style={{ marginTop: 30 }}>
        For the time being, unauthenticated users can access this tool, but they
        can&apos;t see very much. To fully explore the tool, make sure you login
        as a user with access to a range of content.
      </p>
    </div>
  );

  return (
    <section style={{ marginTop: 30 }}>
      <MessageBlock name={"Web Delivery Platform (WDP)"} message={content} />
    </section>
  );
}
