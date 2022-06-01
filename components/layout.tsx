import Footer from "./footer";
import Header from "./header";

import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
