import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header>
      <div>
        <p>Tristan Tornatore</p>  
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