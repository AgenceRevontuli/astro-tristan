import styles from '../../styles/References.module.scss'

import LogoGoogle from "/logo-google.svg";
import LogoRitmo from "/logo-ritmo.svg";
import LogoEsa from "/logo-esa.svg";
import LogoPsy from "/logo=psynyou.svg";

export default function References() {
  return (
    <div className={styles.logoRefs}>
        <ul>
          <li><img src={LogoGoogle} alt="" /></li>
          <li><img src={LogoEsa} alt="" /></li>
          <li><img src={LogoRitmo} alt="" /></li>
          <li><img src={LogoPsy} alt="" /></li>
        </ul>
    </div>
  )
}
