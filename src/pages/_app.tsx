import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { RootLayout } from "@/components/layout/layout";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
