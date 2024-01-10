import Link from 'next/link';
import styles from '../styles/NavBar.module.css'; // Assuming you use CSS Modules for styling

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };

export default NavBar;
