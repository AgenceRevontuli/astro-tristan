import styles from '../../styles/Blog.module.scss';

type Props = {
    category:{
        name: string, 
        slug: string,
    }
}

const Category = ({
    category
}: Props) => {
  return (
    <div className={styles.category_tag}>
        <a href={category.slug}><p>{category.name}</p></a>
    </div>
  )
}

export default Category
