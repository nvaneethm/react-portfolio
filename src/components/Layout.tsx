import React from 'react';
import NavBar from './NavBar';
import styles from '../styles/Layout.module.css'; // Ensure this path is correct

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
