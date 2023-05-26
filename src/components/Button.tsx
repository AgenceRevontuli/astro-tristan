import type { PropsWithChildren } from 'react';
import Styles from '../styles/Button.module.scss';

type Props = PropsWithChildren <{
}>

export default function Button({ children }: Props) {
  return (
    <button>
      {children}
    </button>
  )
}
