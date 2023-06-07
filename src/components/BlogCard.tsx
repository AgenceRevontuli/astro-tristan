import styles from '../styles/Blog.module.scss';

type Props = {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    imgUrl: string; 
    alt: string;
    category: string[];
}

const BlogCard = ({
    title,
    excerpt,
    date,
    author,
    imgUrl,
    alt,
    category
}: Props) => {
  return (
    <div className={styles.post_card}>
      <div className={styles.post_card_img}>
        <img src={imgUrl} alt={alt} />
      </div>
      <div>
        <div className={styles.post_card_meta}>
            <div>
                <p>{date}</p>
            </div>
            <div>
                <p>{author}</p>
            </div>
        </div>
        <div className={styles.post_card_category}>
            {category.map((categorie, index) => (
                <li key={index} className={styles.category_tag}>
                    {categorie}
                </li>
            ))}
        </div>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default BlogCard
