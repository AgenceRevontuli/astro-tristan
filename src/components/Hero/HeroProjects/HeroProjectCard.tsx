import styles from './style.module.scss';

type Props = {
  title: string, 
  imgUrl: string,
  alt: string,
  description: string,
  tags: string
}

export default function HeroProjectCard({
  title,
  imgUrl,
  alt,
  description,
  tags
}: Props) {
  return (
    <div>
       <div className={styles.hero_card}>
        <div>
          <img src={imgUrl} alt={alt} />
        </div>
        <div className={styles.card_txt}>
          <div>
              <h2>{title}</h2>
              <h3>{tags}</h3>
          </div>
          <div>
              <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
