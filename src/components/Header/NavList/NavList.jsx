import React from "react"
import styles from "./NavList.module.scss"
import NavListItem from "./NavListItem/NavListItem"
import { BrowserRouter as Router } from "react-router-dom"

const navItems = [
	{
		_id: "1",
		title: "Мои сайты",
		url: "sites",
		isActive: false,
	},
	{
		_id: "2",
		title: "API",
		url: "api",
		isActive: false,
	},
	{
		_id: "3",
		title: "Помощь",
		url: "help",
		isActive: false,
	},
	{
		_id: "4",
		title: "Контакты",
		url: "contact",
		isActive: false,
	},
]

const NavList = () => {
	return (
		<ul className={styles.nav__list}>
			{navItems.map(item => (
				<NavListItem key={item._id} item={item} />
			))}
		</ul>
	)
}

export default NavList
