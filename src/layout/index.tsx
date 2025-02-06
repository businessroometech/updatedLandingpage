import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}
const Layout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
