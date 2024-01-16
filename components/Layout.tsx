// components/Layout.tsx
import React from "react";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        {/* Navigation Bar Here */}
        <nav>Navbar Content</nav>
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        {/* Footer Content Here */}
        Footer Content
      </footer>
    </div>
  );
};
export default Layout;
