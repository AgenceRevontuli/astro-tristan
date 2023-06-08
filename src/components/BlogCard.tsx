import styles from '../styles/Blog.module.scss';

type Props = {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    imgUrl: string; 
    alt: string;
    category: string[];
    postUrl: string;
}

const BlogCard = ({
    title,
    excerpt,
    date,
    author,
    imgUrl,
    alt,
    category,
    postUrl
}: Props) => {
  return (
    <div className={styles.post_card}>
      <a href={postUrl}>
        <div className={styles.post_card_img}>
          <img src={imgUrl} alt={alt} />
        </div>
      </a>
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
        <a href={postUrl}><h2>{title}</h2></a>
        <a href={postUrl}><p>{excerpt}</p></a>
      </div>
    </div>
  )
}

export default BlogCard
