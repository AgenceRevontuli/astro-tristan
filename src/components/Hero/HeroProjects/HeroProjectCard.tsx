import styles from './style.module.scss';

export default function HeroProjectCard() {
  return (
    <div>
       <div className={styles.hero_card}>
        <div>
          <img src={'/lpaf.png'} alt="" />
        </div>
        <div className={styles.card_txt}>
          <div>
              <h2>Le Prêt-à Français</h2>
              <h3>Mode ethique et résponsable - 2023</h3>
          </div>
          <div>
              <p>Acquisition / Webdesign / Developpement de thème wordpress e-commerce</p>
          </div>
        </div>
      </div>
      <div className={styles.hero_card}>
        <div>
          <img src={'/fnpsl.png'} alt="" />
        </div>
        <div className={styles.card_txt}>
          <div>
              <h2>Fédération Nationale Profession Sport et Loisirs</h2>
              <h3>Associatifs - 2023</h3>
          </div>
          <div>
              <p>Gestion de projet / Webdesign / Réseaux Multisite sous Wordpress (48 sites)</p>
          </div>
        </div>
      </div>
      <div className={styles.hero_card}>
        <div>
          <img src={'/lmconseil.png'} alt="" />
        </div>
        <div className={styles.card_txt}>
          <div>
              <h2>LMConseil</h2>
              <h3>Cabinet RH et Bilan de compétences - 2023</h3>
          </div>
          <div>
              <p>Maquettage Figma et Développement d'un site sous wordpress / Plan de taggage et Analytics</p>
          </div>
        </div>
      </div>
      <div className={styles.hero_card}>
        <div>
          <img src={'/cabourg-plage.png'} alt="" />
        </div>
        <div className={styles.card_txt}>
          <div>
              <h2>Crococlub de Cabourg</h2>
              <h3>Loisirs - 2022</h3>
          </div>
          <div>
              <p>Webdesign et Développement d'un site sous wordpress</p>
          </div>
        </div>
      </div>
    </div>
  )
}
