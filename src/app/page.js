import Link from "next/link";
import styles from './styles.module.scss'

export default function Home() {
  return <div className={styles.home}>
    <h2>Добро пожаловать!</h2>
    <p>
      <img src="/img/restaurant.png" alt="" />
    </p>
    <p>
      <Link href="restaurants">Информация о ресторанах</Link>
    </p>
  </div>
}
