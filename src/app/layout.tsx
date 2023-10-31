// "use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

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
    // <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
    // </Provider>
  );
}
