import styles from './style.module.scss';
import { MdArrowOutward } from 'react-icons/md'

type Props = {
  title: string, 
  imgUrl: string,
  alt: string,
  excerpt: string,
  tags: string[],
}

export default function HeroProjectCard({
  title,
  imgUrl,
  alt,
  excerpt,
  tags
}: Props) {
  return (
      <div className={styles.hero_card}>
        <div>
          <img src={imgUrl} alt={alt} />
        </div>
        <div className={styles.card_txt}>
          <div className={styles.card_title}>
              <h2>{title}</h2>
              <h3>{excerpt}</h3>
              <div className={styles.card_tags}>
                <ul className={styles.tags_list}>
                  {tags ? tags.map((tag, index) => (
                      <li><span key={index} className={styles.tag}>{tag}</span></li>
                    )) : []}
                </ul>
              </div>
          </div>
          <div className={styles.card_cta}>
            <MdArrowOutward />
          </div>
        </div>
    </div>
  )
}
