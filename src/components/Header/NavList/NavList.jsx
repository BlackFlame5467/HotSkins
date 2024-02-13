import React from "react"
import styles from "./NavList.module.scss"
import NavListItem from "./NavListItem/NavListItem"

const navItems = [
	{
		_id: "1",
		title: "Мои сайты",
		isActive: false,
	},
	{
		_id: "2",
		title: "API",
		isActive: false,
	},
	{
		_id: "3",
		title: "Помощь",
		isActive: false,
	},
	{
		_id: "4",
		title: "Контакты",
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
