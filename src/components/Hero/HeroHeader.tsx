import Button from '../Button';
import References from '../References/References';
import ArrowIcon from '/arrow.svg';
import styles from './styles.module.scss'

type Props = {
    title: string,
    ctaBtn: string, 
    references: boolean
}


export default function HeroHeader({title, ctaBtn, references}: Props) {
  return (
    <div className={styles.header_hero}>
			<div>
				<p><span>Bienvenue à bord</span></p>
				<h1>{title}</h1>
				<p className={styles.hero_describe}>Hello, moi c’est Tristan. <br/> Depuis 8 ans j’accompagne les entreprises et les entrepreneurs à développer des stratégies d’acquisition digitale, suivre leurs analytics et créer des expériences web sur-mesure.
				<br/><strong>Et vous, comment puis-je vous aider ?</strong> </p>
				<div className={styles.hero_cta}>
					<Button>{ctaBtn}</Button>
					<div><img src={ArrowIcon} alt="" /></div>
				</div>
				{references ? <References /> : null}
			</div>
    </div>
  )
}
