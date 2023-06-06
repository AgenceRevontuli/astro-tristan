import styles from '../styles/Header.module.scss'

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
          <li><a href="#">À propos</a></li>
          <li><a href="#">Source</a></li>
        </ul>
      </nav>
      <div className={styles.ctalink}>
        <a href="#">Contact</a>
      </div>
    </header>
  )
}