// components/Navbar.tsx
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.navlink}>Home</a></Link>
      <Link href="/about"><a className={styles.navlink}>About Me</a></Link>
      <Link href="/articles"><a className={styles.navlink}>Articles</a></Link>
    </nav>
  );
};

export default Navbar;
