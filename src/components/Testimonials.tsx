import styles from './../styles/Testimonials.module.scss';

type Props = {
    person: string,
    entreprise: string,
    role: string, 
    testimonial: string, 
    imgURL: string,
    alt: string
}

const Testimonials = ({
    person,
    entreprise,
    role,
    testimonial,
    imgURL, 
    alt
}: Props) => {
  return (
        <div>
            <div className={styles.card_testimonials}>
                <div>
                    <img src={imgURL} alt={alt} />
                </div>
                <div>
                    <h3>{person}</h3>
                    <h4>{role} {entreprise}</h4>
                </div>
            </div>
            <p>{testimonial}</p>
        </div>
  )
}

export default Testimonials
