import React from "react"
import Container from "../Container/Container"
import styles from "./Header.module.scss"

import logo from "../../img/header/logo.svg"
import NavList from "./NavList/NavList"
import NavUser from "./NavUser/NavUser"
import Btn from "../Btn/Btn"

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={styles.nav}>
					<a href="/">
						<img src={logo} alt="" />
					</a>
					<NavList />
					<NavUser />
				</nav>
			</Container>
			<div className={styles.header__content}>
				<Container>
					<div className={styles.header__info}>
						<h1 className={styles.header__title}>
							Принимайте платежи от пользователей с помощью скинов CS:GO и DOTA
							2
						</h1>
						<Btn title={"Подключить проект"} btnClass={styles.header__btn} />
					</div>
				</Container>
			</div>
		</header>
	)
}

export default Header
