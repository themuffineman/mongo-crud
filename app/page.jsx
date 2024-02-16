import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between fixed top-0 min-w-full bg-slate-100 p-4 shadow-sm">
        <div className="text-black font-bold tracking-tighter text-2xl">MuffineNotes📝</div>
        <div className="flex gap-4 items-center">
          <LoginLink><Button variant="outline">Login</Button></LoginLink>
          <RegisterLink><Button variant="outline">Register</Button></RegisterLink>
        </div>
      </nav>
      <h1 className="text-black font-bold text-4xl">Welcome to MuffineNotes📝</h1>
      <p className="text-black capitalize font-semibold font-mono text-md">Sign Up and Enjoy a Wonderful Notes Experience </p>
      <Link className="bg-black p-3 text-white rounded" href="/dashboard">Click Me</Link>
    </>
  );
}
