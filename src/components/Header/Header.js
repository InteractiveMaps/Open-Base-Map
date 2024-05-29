import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Interactive Maps
          </Link>
        </p>
        <nav>
          <div style={{display:"flex", gap:"1em"}}>
            <li style={{listStyleType:"none"}}><a href='/mountain'>Mountain</a></li>
            <li style={{listStyleType:"none"}}><a href='/'>Military Bases</a></li>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
