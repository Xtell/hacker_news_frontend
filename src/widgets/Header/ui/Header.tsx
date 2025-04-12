import { ReactNode } from "react"
import styles from './Header.module.css';

export interface HeaderProps {
  logoSlot?: ReactNode;
  menuSlot?: ReactNode;
}
export const Header = (props: HeaderProps) => {
  const { logoSlot, menuSlot } = props;

  return (
    <header className={styles.header}>
      {logoSlot && <div className={styles.logo}>{logoSlot}</div>}
      {menuSlot && <div className={styles.menu}>{menuSlot}</div>}
    </header>
  )
}

