import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";

import Container from '@components/Container';

import styles from './Header.module.scss';
import 'react-dropdown/style.css';
import { useState } from 'react';




const Header = () => {
  const[menuOpen, setMenuOpen] = useState(false) 
  function handleMenu(){
    setMenuOpen(!menuOpen)
  }
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Interactive Maps
          </Link>
        </p>
        <Menu menuButton={<MenuButton className={styles.buttonStyle} onClick={handleMenu}>{menuOpen?<RxCross1 size={28}/>:<GrMenu size={28} />}</MenuButton>} transition>
          <MenuItem><a href='/antoni-gaudi-architecture'>Antoni Gaudi Architecture</a></MenuItem>
          <MenuItem><a href='/major-ww1-battles'>Major WW1 Battles </a></MenuItem>
          <MenuItem><a href='/moon-landings'>Moon Landings</a></MenuItem>
          <MenuItem><a href='/formula-1-2025'>Formula 1 2025</a></MenuItem>
          <MenuItem><a href='/formula-1'>Formula 1 2024</a></MenuItem>
          <MenuItem><a href='/highest-points'>Highest Points</a></MenuItem>
          <MenuItem><a href='/overseas-military-bases'>Military Bases</a></MenuItem>
        </Menu>
      </Container>
    </header>
  );
};

export default Header;
