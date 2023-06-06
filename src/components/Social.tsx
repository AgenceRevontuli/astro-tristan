import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './../styles/Social.module.scss';
const Social = () => {
  return (
    <div className={styles.sub_socials}>
        <h2>Me suivre</h2>
       <ul>
            <li><span><BsGithub /></span><p>Github</p><span><FiArrowUpRight /></span></li>
            <li><span><BsLinkedin /></span><p>LinkedIn</p> <span><FiArrowUpRight /></span></li>
            <li><span><BsYoutube /></span><p>YouTube</p> <span><FiArrowUpRight /></span></li>
            <li><span><BsTwitter /></span><p>Twitter</p> <span><FiArrowUpRight /></span></li>
        </ul>
    </div>
  )
}

export default Social
