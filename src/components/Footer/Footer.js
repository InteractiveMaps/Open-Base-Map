import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <div style={{display: "flex", flexDirection:"row", gap: "1em"}}>
          <p>
            <a style={{textDecoration:"none"}} href="https://x.com/Interactiv18714">Twitter</a>
          </p>
          <p>l</p>
          <p>
            <a style={{textDecoration:"none"}} href="https://github.com/InteractiveMaps/Open-Base-Map">GitHub</a>
          </p>
        </div>
        <p>
          &copy; <a href="/">InteractiveMaps</a>, {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
