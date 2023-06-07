import type { PropsWithChildren } from 'react';
import styles from '../styles/Button.module.scss';

type Props = PropsWithChildren <{
}>

export default function Button({ children }: Props) {
  return (
    <button className={styles.cta_primary}>
      {children}
    </button>
  )
}
