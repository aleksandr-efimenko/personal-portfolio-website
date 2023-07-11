import { MainNav } from "@/components/main-nav";
import Head from "next/head";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aleksandr Efimenko personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <MainNav />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {children}
        </div>
      </main>
    </>
  );
}
