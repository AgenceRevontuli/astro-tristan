import { useState } from 'react';
import styles from './../styles/Testimonials.module.scss';
import Testimonials from './Testimonials';
import{ FiArrowRight } from 'react-icons/fi';
import{ FiArrowLeft } from 'react-icons/fi';

interface TestimonialItem {
  frontmatter: {
    person: string;
    entreprise: string;
    role: string;
    testimonial: string;
    img: {
      url: string;
      alt: string;
    };
  };
}

type Props = {
  items: TestimonialItem[]
}

const Carousel = ({
  items
}: Props ) => {

  const [activeIndex, setActiveIndex] = useState(1);
  
  const nextSlide = () => {
    if(activeIndex !== items.length) {
      setActiveIndex(activeIndex + 1)
    } else if (activeIndex === items.length){
      setActiveIndex(1)
    }
    console.log(activeIndex)
  }

  const prevSlide = () => {
    if(activeIndex !== 1) {
      setActiveIndex(activeIndex - 1)
    } else if (activeIndex === 1){
      setActiveIndex(items.length)
    }
  }

  return (
    <div>
      <h2>Ils témoignent</h2>
      <div className={styles.carousel}>
              {items.map((item, index) => (
                <div key={index} className={activeIndex === index + 1 ? `${styles.slide_active} ${styles.carousel_item}` : `${styles.carousel_item}`}>
                  <Testimonials
                    person={item.frontmatter.person}
                    entreprise={item.frontmatter.entreprise}
                    role={item.frontmatter.role}
                    testimonial={item.frontmatter.testimonial}
                    imgURL={item.frontmatter.img.url}
                    alt={item.frontmatter.img.alt}
                  />
                </div>
              ))}
      </div>
      <div className={styles.carousel_buttons}>
            <button className={styles.btn_carousel} onClick={prevSlide}><FiArrowLeft /></button>
            <div className={styles.carousel_indicator}>
              {`${activeIndex} / ${items.length}`}
            </div>
            <button className={styles.btn_carousel} onClick={nextSlide}><FiArrowRight /></button>
        </div>
    </div>
  )
}

export default Carousel
