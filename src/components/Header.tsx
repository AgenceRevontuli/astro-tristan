import styles from '../styles/Header.module.scss';
import { BsGithub } from 'react-icons/bs';

export default function Header() {
  return (
    <header>
      <div className={styles.header_title}>
        <a href="/"><p>Tristan Tornatore</p></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Expertises</a></li>
          <li><a href="#">Projets</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="#"><BsGithub /> Source</a></li>
        </ul>
      </nav>
      <div className={styles.ctalink}>
        <a href="#">Contact</a>
      </div>
    </header>
  )
}