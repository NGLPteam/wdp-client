"use server";

import { revalidatePath } from "next/cache";
import { signIn as doSignIn, signOut as doSignOut } from "@/lib/auth/initAuth";

export async function signIn() {
  await doSignIn("keycloak");
}

export async function signOut() {
  await doSignOut().then(() => revalidatePath("/"));
}
