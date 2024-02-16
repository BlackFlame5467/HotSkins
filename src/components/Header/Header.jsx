import React from "react"
import Container from "../Container/Container"
import styles from "./Header.module.scss"

import logo from "../../img/header/logo.svg"
import NavList from "./NavList/NavList"
import NavUser from "./NavUser/NavUser"
import Btn from "../Btn/Btn"
import { Link, NavLink, Router } from "react-router-dom"

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={styles.nav}>
					<div className={styles.nav__inner}>
						<a href="/">
							<img src={logo} alt="" />
						</a>
						<NavList />
					</div>
					<NavUser />
				</nav>
			</Container>
		</header>
	)
}

export default Header
