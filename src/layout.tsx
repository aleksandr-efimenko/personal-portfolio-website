import { MainNav } from "@/components/main-nav";
import Head from "next/head";
import { cn } from "./utils/utils";
import { fontGrotesk } from "./styles/fonts";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aleksandr Efimenko personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={cn(
          " flex min-h-screen flex-col items-center justify-center bg-background",
          // fontGrotesk.variable
          fontGrotesk.className
        )}
      >
        <MainNav />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
          {children}
        </div>
      </main>
    </>
  );
}
