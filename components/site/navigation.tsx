import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle-button";

type Props = {
  user?: null | User;
};
export const Navigation = ({ user }: Props) => {
  return (
    <>
      <div className=" p-4 flex  justify-between">
        <aside className="flex items-center gap-2">
          <Image
            className="h-12 w-12 rounded-full"
            src={"/assets/plura-logo.svg"}
            width={1200}
            height={1000}
            alt="owlux logo"
          />
          <span className="text-xl font-bold"> Owlux.</span>
        </aside>
        <nav className="hidden lg:block ">
          <ul className="flex items-center justify-center gap-8 ">
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Documentation</Link>
            <Link href={"#"}>Features</Link>
          </ul>
        </nav>
        <aside className="flex gap-4 items-center z-10">
          <SignedOut><Link
            href={"/agency"}
            className="bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900   p-2 px-4 rounded-md hover:bg-primary/80"
          >
            Login
          </Link></SignedOut>
          <SignedIn><UserButton /></SignedIn>

          <ModeToggle />
        </aside>
      </div>
    </>
  );
};
