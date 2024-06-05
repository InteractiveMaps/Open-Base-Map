import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';
import 'react-dropdown/style.css';




const Header = () => {
  const options = [
    { value: 'formula-1', label: 'Formula 1' },
    { value: 'mountains', label: 'Heighest Points' },
    { value: 'military-base', label: 'Military Bases' },
  ];
  
  function handleChange(){
    window.location.href("/"+event.target.value)
  }
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
            <li style={{listStyleType:"none"}}><a href='/formula-1'>Formula 1</a></li>
            <li style={{listStyleType:"none"}}><a href='/mountain'>Mountain</a></li>
            <li style={{listStyleType:"none"}}><a href='/'>Military Bases</a></li>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
