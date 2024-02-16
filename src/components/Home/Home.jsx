import React from "react"
import styles from "./Home.module.scss"
import Container from "../Container/Container"
import { Link } from "react-router-dom"
import Btn from "../Btn/Btn"

const Home = () => {
	return (
		<div className={styles.home__content}>
			<Container>
				<div className={styles.home__info}>
					<h1 className={styles.home__title}>
						Принимайте платежи от пользователей с помощью скинов CS:GO и DOTA 2
					</h1>
					<Link to="statement">
						<Btn title={"Подключить проект"} btnClass={styles.home__btn} />
					</Link>
				</div>
			</Container>
		</div>
	)
}

export default Home
