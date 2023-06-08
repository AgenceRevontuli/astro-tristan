import styles from '../styles/Header.module.scss';
import { BsGithub } from 'react-icons/bs';
import Logo from '/logo-revontuli-tristan-tornatore-digital.svg';

export default function Header() {
  return (
    <header>
      <div className={styles.header_title}>
        <a href="/"><img src={Logo} alt="Logo de Tristan" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Expertises</a></li>
          <li><a href="#">Projets</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="#"><BsGithub /> Source</a></li>
        </ul>
      </nav>
      <div className={styles.ctalink}>
        <a href="#">Contact</a>
      </div>
    </header>
  )
}