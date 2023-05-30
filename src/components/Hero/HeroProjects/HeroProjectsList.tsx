import HeroProjectCard from "./HeroProjectCard";
import styles from "./style.module.scss"

export default function HeroProjectsList() {
  return (
    <div className={styles.hero_list}>
      <HeroProjectCard />
    </div>
  )
}
