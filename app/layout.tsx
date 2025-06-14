import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { ViewTransitions } from "next-view-transitions";

// const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] })
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "MMK Icons",
  description: "Icon lib for react and nextjs",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
        <link rel="icon" href="/file.svg" sizes="any" />
        </head>
        <body
          className={`${inter.className} bg-[#fff] dark:bg-[#000] antialiased text-neutral-900 dark:text-neutral-100 selection:bg-blue-600 selection:text-neutral-200 `}
        >
          <Header />

          <div className="w-[100vw]  h-full flex-col lg:flex-row flex  justify-center  lg:px-40 " >
            <SideMenu />
            <div className="min-h-[80vh] w-[100%] lg:w-[80%] pl-5  scroll-smooth pt-10 px-2  " >
              {children}
            </div>
          </div>

        </body>
      </html>
    </ViewTransitions>
  );
}
