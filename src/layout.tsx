import Head from "next/head";
import { cn } from "./utils/utils";
import { fontGrotesk } from "./styles/fonts";
import { Header } from "./components/header";

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
          " -z-20 min-h-screen bg-background text-foreground",
          // fontGrotesk.variable
          fontGrotesk.className
        )}
      >
        <Header />
        <div className="container relative z-0">{children}</div>
      </main>
    </>
  );
}
