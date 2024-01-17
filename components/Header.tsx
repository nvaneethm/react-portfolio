// components/Header.tsx
// import Navbar from './Navbar';
import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
