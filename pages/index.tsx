import React from "react";
import { useSetLocale } from "hooks/useSetLocale";
import { useSetActiveEntity } from "hooks/useGlobalData";
import Link from "next/link";

export default function Home() {
  useSetLocale("en");
  useSetActiveEntity();

  return (
    <div>
      <h1>NGLP Admin</h1>
      <ul>
        <li>
          <Link href="/collections">
            <a>Collections</a>
          </Link>
        </li>
        <li>
          <Link href="/communities">
            <a>Communities</a>
          </Link>
        </li>
        <li>
          <Link href="/items">
            <a>Items</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
