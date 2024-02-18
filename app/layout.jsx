import { Inter } from "next/font/google";
import "./globals.css";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const {isAuthenticated, isLoading} = getKindeServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen h-screen w-screen min-w-screen flex-col items-center justify-center">
        {children}
        {isLoading && <Loading/> }
        </main>
      </body>
    </html>
  );
}
