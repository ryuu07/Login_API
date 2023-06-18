"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Link href={"/login"}> Login </Link>{" "}
    </div>
  );
}
export default Home;
