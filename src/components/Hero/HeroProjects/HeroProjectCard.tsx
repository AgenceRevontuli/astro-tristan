import styles from './style.module.scss';
import { MdArrowOutward } from 'react-icons/md'

type Props = {
  title: string, 
  imgUrl: string,
  alt: string,
  excerpt: string,
  tags: string[],
  url?: string,
}

export default function HeroProjectCard({
  title,
  imgUrl,
  alt,
  excerpt,
  tags,
  url
}: Props) {
  return (
      <div className={styles.hero_card}>
        <a href={url}>
          <div>
            <img src={imgUrl} alt={alt} />
          </div>
        </a>
        <div className={styles.card_txt}>
          <div className={styles.card_title}>
              <a href={url}><h2>{title}</h2></a>
              <h3>{excerpt}</h3>
              <div className={styles.card_tags}>
                <ul className={styles.tags_list}>
                  {tags ? tags.map((tag, index) => (
                      <li><span key={index} className={styles.tag}>{tag}</span></li>
                    )) : []}
                </ul>
              </div>
          </div>
          <a href={url}>
            <div className={styles.card_cta}>
              <MdArrowOutward />
            </div>
          </a>
        </div>
    </div>
  )
}
