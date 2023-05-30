import styles from './styles.module.scss'

export default function HeroText() {
  return (
    <div className={styles.hero_txt}>
        {/*
        Voir ici pour intégrer un scroll horizontale qui se bloquerait le temps de faire défiler les 3 messages clés avant de reprendre la navigation générale du site.
        */}
       <p>De designer à développeur, j'ai eu la chance d'accompagner pendant 4 ans les plus prestigieuses startups de France en tant que coordinateur chez Google for Startups France.</p> 
       <p>Après 400 projets accompagnés je tire un enseignement commun à toutes ces expériences : Stratégie, Technique et Analyse doivent être piloté en un seul point pour former la clé du succès.</p> 
       <p>Aujourd'hui je vous accompagne en appuyant une méthologie qui rassemble ces trois grands piliers.</p>
    </div>
  )
}
