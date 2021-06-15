import React from "react";
import Link from "next/link";
import Authorize from "components/auth/Authorize";

export default function CommunityList() {
  return (
    <div>
      <h1>Communities</h1>
      <Authorize
        isAuthorized={true}
        entity="communities"
        permissions={["self.assets.create", "self.update", "items.create"]}
      >
        <h1>I'm authorized!</h1>
      </Authorize>
      <Authorize
        isAuthorized={false}
        entity="communities"
        permissions={["self.assets.create", "self.update", "items.create"]}
      >
        <h1>I'm authorized!</h1>
      </Authorize>
      <ul>
        <li>
          <Link href={`/communities/1`}>
            <a>Community number 1</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
