import { Inter } from "next/font/google";
import "./globals.css";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const {isAuthenticated} = getKindeServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen h-screen w-screen min-w-screen flex-col items-center justify-center">
          {/* {
            await isAuthenticated()? 
            (null
            ):(
            <nav className="flex justify-between sticky top-0 min-w-full bg-slate-100 p-4 shadow-sm">
              <div className="text-black font-bold tracking-tighter text-2xl">MuffineNotes📝</div>
              
                {await isAuthenticated()? (
                  <LogoutLink>Logout</LogoutLink>
                ):(
                  <div className="flex gap-4 items-center">
                    <Button variant="outline"><LoginLink>Login</LoginLink></Button>
                    <Button variant="outline"><RegisterLink>Register</RegisterLink></Button>
                  </div>
                )}
              
            </nav>)
          } */}
        {children}
        </main>
      </body>
    </html>
  );
}
