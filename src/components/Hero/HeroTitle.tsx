import styles from './styles.module.scss'

type Props = {
    primaryTitle: string;
    secondaryTitle: string;
}

const HeroTitle = ({
    primaryTitle,
    secondaryTitle
}: Props) => {
  return (
    <div className={styles.hero_title}>
        <h2>{primaryTitle}</h2>
        <h3>{secondaryTitle}</h3>
    </div>
  )
}

export default HeroTitle
