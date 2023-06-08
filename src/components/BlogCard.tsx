import styles from '../styles/Blog.module.scss';
import Category from './Blog/Category';
import { generateCategoryData } from '../utils/helper';

type Props = {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    alt: string;
    category: string[];
    postUrl: string;
}

const BlogCard = ({
    title,
    excerpt,
    date,
    author,
    image,
    alt,
    category,
    postUrl
}: Props) => {
  const allCategories = generateCategoryData(category);
  return (
    <div className={styles.post_card}>
      <a href={postUrl}>
        <div className={styles.post_card_img}>
          <img src={`${image}.jpeg`} alt={alt} />
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
            {allCategories.map(category => (
                <Category 
                  category={category}
                />
            ))}
        </div>
        <a href={postUrl}><h2>{title}</h2></a>
        <a href={postUrl}><p>{excerpt}</p></a>
      </div>
    </div>
  )
}

export default BlogCard
