import styles from './styles.module.scss';

const HeroServices = () => {
  return (
    <div>
      <div className={styles.row_services}>
        <div className={`${styles.col_services} ${styles.col_row}`}>
          <h2>De quoi avez-vous le plus besoin aujourd'hui ?</h2>
          <p>Mon offre s'organise en 4 grands services qui servent chacun un seul objectif : Votre réussite. Fini de multiplier les allers-retours entre les prestataires. Trouvez l'allié idéal pour votre stratégie digitale.</p>
        </div>
        <div className={styles.col_services}>
          <h3>Développement web</h3>
          <p>Envie de créer un site web qui retient l'attention et transforme vos visiteurs ?</p>
        </div>
      </div>
      <div className={styles.row_services}>
        <div className={styles.col_services}>
          <h3>Acquisition client</h3>
          <p>20% de stratégie, 80% d'actions, on élabore ensemble votre machine à leads.</p>
        </div>
        <div className={styles.col_services}>
          <h3>Tracking & Data</h3>
          <p>Du pixel au plan de taggage complexe, on mesure tout ce qui compte</p>
        </div>
        <div className={styles.col_services}>
          <h3>Automatisation de processus</h3>
          <p>Gagnez du temps, améliorez votre retention et votre fidélisation</p>
        </div>
      </div>
    </div>
  )
}

export default HeroServices
