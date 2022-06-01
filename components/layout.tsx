import Footer from "./footer";
import Header from "./header";

import React from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {router.pathname === "/quiz" ? null : <Footer />}
    </>
  );
}
