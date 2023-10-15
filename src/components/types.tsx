import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";
import { LayoutsKeys } from "./layouts/page";

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutsKeys;
};

export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutsKeys;
  };
};