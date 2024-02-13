import React from "react"
import styles from "./NavUser.module.scss"
import Btn from "../../Btn/Btn"

import ru from "./../../../img/header/ru.svg"
import en from "./../../../img/header/en.svg"
import ukr from "./../../../img/header/ukr.svg"

const NavUser = () => {
	return (
		<div className={styles.nav__user}>
			<select className={styles.changeLang} name="select-category">
				<option value="1" className={styles.changeLang__item}>
					<img src={ru} alt="" />
					<h3 className={styles.changeLang__title}>RU</h3>
				</option>
				<option value="2" className={styles.changeLang__item}>
					<img src={en} alt="" />
					<h3 className={styles.changeLang__title}>EN</h3>
				</option>
				<option value="3" className={styles.changeLang__item}>
					<img src={ukr} alt="" />
					<h3 className={styles.changeLang__title}>UKR</h3>
				</option>
			</select>
			<Btn title={"Войти"} />
		</div>
	)
}

export default NavUser
