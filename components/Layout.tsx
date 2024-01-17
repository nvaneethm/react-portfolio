// components/Layout.tsx
import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
