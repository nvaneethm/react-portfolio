// pages/index.tsx
import React from "react";
import Avatar from "../components/Avatar";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Avatar />
    </div>
  );
};

export default HomePage;
