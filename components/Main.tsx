// components/Main.tsx
import styles from '../styles/Main.module.css';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return (
        <main className={styles.main}>
        {children}
      </main>
    );
}

export default Main;
