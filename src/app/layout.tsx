import store from "@/redux/storeGlobal";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import Provider1 from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Wow",
  description: "The wonderfull website to watch movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
      <body className={inter.className}>
        {/* <Provider1> */}
        {children}
        {/* </Provider1> */}
      </body>
      {/* </Provider> */}
    </html>
  );
}
