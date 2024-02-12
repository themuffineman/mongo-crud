import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-black font-bold text-4xl">Welcome to MuffineNotes📝</h1>
      <p className="text-black capitalize font-semibold font-mono text-md">Sign Up and Enjoy a Wonderful Notes Experience </p>
      <Link className="bg-black p-3 text-white rounded" href="/dashboard">Click Me</Link>
    </>
  );
}
