import * as React from "react";
import Link from "next/link";

export default function InstallationName() {
  return (
    <Link href="/">
      <a className="t-label-mix a-link">WDP Installation Name</a>
    </Link>
  );
}

// type Props = {
//   data: InstallationNameFragment$key;
// };

// const fragment = graphql`
//   fragment InstallationNameFragment on Query {
//     # TODO: Get installation name
//   }
// `;
